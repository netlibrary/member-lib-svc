import {afterAll} from "vitest";
import {typeDefs} from "../../src/apollo-neo4j/type-defs/_typeDefs.js";
import {resolvers} from "../../src/apollo-neo4j/resolvers/_resolvers.js";
import {testDriver} from "../helpers/driver.js";
import {Neo4jGraphQL} from "@neo4j/graphql";
import {OGM} from "@neo4j/graphql-ogm";
import {startApolloServer} from "../../src/apollo_server.js";
import {setOGMs} from "../../global/ogm.js";
import {driver} from "neo4j-driver";

export async function createTestSuite() {
    // Create OGM instance
    const ogm = new OGM({typeDefs, driver: testDriver});

    // Create Neo4jGraphQL instance
    const neoSchema = new Neo4jGraphQL({
        typeDefs,
        resolvers,
        driver: testDriver,
    });

    const [schema] = await Promise.all([neoSchema.getSchema(), ogm.init()]);

    const tx = testDriver.session().beginTransaction();

    afterAll(async () => {
        if (tx.isOpen())
            await tx.close();
    });

    return {ogm, tx};
}