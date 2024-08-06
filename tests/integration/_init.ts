import {afterAll} from "vitest";
import {typeDefs} from "../../src/apollo-neo4j/type-defs/_typeDefs.js";
import {resolvers} from "../../src/apollo-neo4j/resolvers/_resolvers.js";
import {testDriver} from "../helpers/driver.js";
import {Neo4jGraphQL} from "@neo4j/graphql";
import {OGM} from "@neo4j/graphql-ogm";
import {createApolloServer} from "../../src/apollo_server.js";

// Define your context type
export type MyContext = {
    driver: typeof testDriver;
};

export async function createTestSuite() {
    // Create OGM instance
    const ogm = new OGM({ typeDefs, driver: testDriver });

    // Create Neo4jGraphQL instance
    const neoSchema = new Neo4jGraphQL({
        typeDefs,
        resolvers,
        driver: testDriver,
    });

    const [schema] = await Promise.all([neoSchema.getSchema(), ogm.init()]);

    const {httpServer, apolloServer} = await createApolloServer(schema, testDriver, ogm);

    const executeOperation = async (query: string, variables) => {
        const response = await apolloServer.executeOperation({
            query,
            variables,
        }, {
            contextValue: {
                token: 'test-token',
                ogm: ogm,
                driver: testDriver
            },
        });
        return response;
    };

    afterAll(async () => {
        if (apolloServer) {
            await apolloServer.stop();
        }
    });

    return { executeOperation };
}