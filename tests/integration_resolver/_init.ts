import {afterAll} from "vitest";
import {typeDefs} from "../../src/apollo-neo4j/type-defs/_typeDefs.js";
import {resolvers} from "../../src/apollo-neo4j/resolvers/_resolvers.js";
import {testDriver} from "../helpers/driver.js";
import {Neo4jGraphQL} from "@neo4j/graphql";
import {OGM} from "@neo4j/graphql-ogm";
import {startApolloServer} from "../../src/apollo_server.js";
import {setOGMs} from "../../global/ogm.js";
import {memberIds} from "../../global/vars.js";
import { vi } from 'vitest';
import {Session} from "neo4j-driver";
import {Driver} from "neo4j-driver/types/driver.js";

// Define your context type
export type MyContext = {
    driver: typeof testDriver;
};

export async function createTestSuite() {
    // Create OGM instance
    const ogm = new OGM({ typeDefs, driver: testDriver });

    setOGMs(ogm);

    // Create Neo4jGraphQL instance
    const neoSchema = new Neo4jGraphQL({
        typeDefs,
        resolvers,
        driver: testDriver,
    });

    const [schema] = await Promise.all([neoSchema.getSchema(), ogm.init()]);

    const {httpServer, apolloServer} = await startApolloServer(schema, testDriver, ogm);

    const tx = await testDriver.session().beginTransaction();
    const mockTx = {
        run: vi.fn().mockImplementation(async (query, params) => await tx.run(query, params)),
        commit: vi.fn().mockResolvedValue(undefined),
        commitMock: vi.fn().mockImplementation(() => tx.commit()),
        rollback: vi.fn().mockResolvedValue(undefined),
        rollbackMock: vi.fn().mockImplementation(() => tx.rollback()),
        close: vi.fn().mockResolvedValue(undefined),
        closeMock: vi.fn().mockImplementation(() => tx.close()),
    };

    // Create a mock session
    const mockSession: Partial<Session> = {
        beginTransaction: vi.fn().mockResolvedValue(mockTx),
        close: vi.fn().mockResolvedValue(undefined),
    };

    // Create a mock driver
    const mockDriver: Partial<Driver> = {
        session: vi.fn().mockReturnValue(mockSession),
    };


    const executeOperation = async (query: string, variables) => {
        const context = {
            ogm: ogm,
            driver: mockDriver as any,
            jwt: {
                sub: memberIds[0]
            }
        } as any;

        const response = await apolloServer.executeOperation(
            {
                query,
                variables,
            },
            {
                contextValue: context
            }
        );
        return response;
    };

    afterAll(async () => {
        if (apolloServer) {
            await apolloServer.stop();
            await mockTx.closeMock();
        }
    });

    return { executeOperation, mockTx };
}