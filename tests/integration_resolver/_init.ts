import {afterAll} from "vitest";
import {resolvers} from "../../src/apollo-neo4j/resolvers/_resolvers.js";
import {testDriver} from "../helpers/driver.js";
import {Neo4jGraphQL} from "@neo4j/graphql";
import {OGM} from "@neo4j/graphql-ogm";
import {startApolloServer} from "../../src/apollo_server.js";
import {setOGMs} from "../../global/ogm.js";
import {memberIds} from "../../global/vars.js";
import {typeDefs} from "../../src/db/type-defs/_typeDefs.js";

// Define your context type
export type MyContext = {
    driver: typeof testDriver;
};

export type TestEnvironment = {
    executeOperation: (driverMock: any, query: string, variables?: any) => Promise<any>;
}

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

    const executeOperation = async (mockDriver, query: string, variables) => {
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
        }
    });

    return { executeOperation };
}