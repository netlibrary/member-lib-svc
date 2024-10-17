import {afterAll, vi} from "vitest";
import {resolvers} from "../../src/apollo-neo4j/resolvers/_resolvers.js";
import {testDriver} from "../helpers/driver.js";
import {Neo4jGraphQL} from "@neo4j/graphql";
import {OGM} from "@neo4j/graphql-ogm";
import {typeDefs} from "../../src/db/type-defs/_typeDefs.js";

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
    const mockTx = {
        run: vi.fn().mockImplementation(async (query, params) => await tx.run(query, params)),
        commit: vi.fn().mockResolvedValue(undefined),
        commitMock: vi.fn().mockImplementation(() => tx.commit()),
        rollback: vi.fn().mockResolvedValue(undefined),
        rollbackMock: vi.fn().mockImplementation(() => tx.rollback()),
        close: vi.fn().mockResolvedValue(undefined),
        closeMock: vi.fn().mockImplementation(() => tx.close()),
    };

    afterAll(async () => {
        if (tx.isOpen())
            await tx.close();
    });

    return {ogm, tx: mockTx};
}