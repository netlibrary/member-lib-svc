import {beforeAll, describe, expect, it} from "vitest";
import {createTestSuite} from "./_init.js";

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

    it('should delete all colls', async () => {
        const {executeOperation, mockTx} = testEnvironment;

        const DELETE_ALL_Colls = `
            mutation {
              deleteAllColls
            }
        `;

        try {
            const response = await executeOperation(DELETE_ALL_Colls);
            expect(response.body.kind).toBe('single');
            if (response.body.kind === 'single') {
                expect(response.body.singleResult.errors).toBeUndefined();
                expect(response.body.singleResult.data?.deleteAllColls).toBeTruthy();
            }

            // Verify database state

            const bookmarkCount = (await mockTx.run('MATCH (c:Collection) RETURN count(c) as count'))
                .records[0].get('count').toNumber();
            expect(bookmarkCount).toBe(0);


            const collPositions = (await mockTx.run('MATCH (pm:MemberMeta) RETURN pm.collectionPositions as cp'))
                .records.map(r => r.get('cp'))[0];

            // check that every child position starts with 'f:'
            expect(collPositions.length).toBe(0);
        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        } finally {
            // Restore initial state
            await mockTx.rollbackMock();
        }
    });
});