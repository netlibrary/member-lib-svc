import {beforeAll, describe, expect, it} from "vitest";
import {createTestSuite, TestEnvironment} from "./_init.js";
import {memberIds} from "../../global/vars.js";
import {ChildPosSvc} from "../../src/apollo-neo4j/services/child_pos.js";

import {getDriverTxMock} from "../helpers/tx.js";

describe('Folder Mutations', () => {
    let testEnvironment: TestEnvironment

    beforeAll(async () => {
        testEnvironment = await createTestSuite();
    });

    it('create', async () => {
        const {executeOperation} = testEnvironment;
        const {mockDriver, mockTx} = await getDriverTxMock()
        // Save initial state

        const {parentId} = (await mockTx.run(`
            match (:Member {id: $memberId})
            match (c:Collection)
            return {parentId: c.id} as r
        `,{memberId: memberIds[0]})).records[0].get('r');
        const name = 'testFolder';
        const position = 1;
        const MUT = `
            mutation CreateFolder($name: String!, $position: Int!, $parentId: ID!) {
              createFolder(name: $name, position: $position, parentId: $parentId)
            }
        `;

        try {
            const response = await executeOperation(mockDriver, MUT, {name, position, parentId});
            expect(response.body.singleResult.errors).toBeUndefined();

            const folderId = Object.values(response.body.singleResult.data)[0];
            const pmChildIds = await ChildPosSvc.getChildIds(memberIds[0], folderId, mockTx as any);
            expect(pmChildIds).toBeDefined();
            expect(pmChildIds?.length).toBe(0);

        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        } finally {
            // Restore initial state
            await mockTx.rollbackMock();
            await mockTx.closeMock()
        }
    });
});