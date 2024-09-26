import {beforeAll, describe, expect, it} from "vitest";
import {createTestSuite} from "./_init.js";
import {testDriver} from "../helpers/driver.js";
import {ParentChilds, SelectedChilds, SelectedNodes} from "../../src/apollo-neo4j/gen/types.js";
import {restoreDbState, saveDbState} from "../helpers/utils_db.js";
import {memberIds} from "../../global/vars.js";
import {ChildPosSvc} from "../../src/apollo-neo4j/services/child_pos.js";

describe('Coll Mutations', () => {
    let testEnvironment: {
        executeOperation: (query: string, variables?: any) => Promise<any>;
        mockTx: any;
    };

    beforeAll(async () => {
        testEnvironment = await createTestSuite();
    });

    it('create', async () => {
        const {executeOperation, mockTx} = testEnvironment;
        // Save initial state

        const name = 'testColl';
        const MUT = `
                mutation CreateCollection($name: String!) {
                  createCollection(name: $name)
                }
        `;
        const colls_QUERY = `
            query CollectionList {
              collectionList {
                    collections {
                    bookmarkCount
                    id
                    name
                  }
              }
            }
        `;

        try {
            const response = await executeOperation(MUT, {name});
            expect(response.body.singleResult.errors).toBeUndefined();

            const collId = Object.values(response.body.singleResult.data)[0];
            expect(collId).toBeDefined();

            // const colls_RESP = await executeOperation(colls_QUERY);
            // const colls = Object.values(colls_RESP.body.singleResult.data)[0];
            // expect(collId).toBeDefined();
        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        } finally {
            // Restore initial state
            await mockTx.rollbackMock();
        }
    });
});