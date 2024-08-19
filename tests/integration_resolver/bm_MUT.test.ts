import {beforeAll, describe, expect, it} from 'vitest';
import {createTestSuite} from "./_init.js";
import {restoreDbState, saveDbState} from "../helpers/utils_db.js";
import {testDriver} from "../helpers/driver.js";
import {memberIds} from "../../global/vars.js";
import {ParentChilds} from "../../src/apollo-neo4j/gen/types.js";
import {ChildPosSvc} from "../../src/apollo-neo4j/services/child_pos.js";
import {BLC_SvcDb} from "../../src/apollo-neo4j/services_db/blc.js";
import {BmCont_SvcDb} from "../../src/apollo-neo4j/services_db/bmContainer.js";


describe('Bookmark Mutations', () => {
    let testEnvironment: {
        executeOperation: (query: string, variables?: any) => Promise<any>;
        mockTx: any;
    };

    beforeAll(async () => {
        testEnvironment = await createTestSuite();
    });

    it('should delete all bookmarks', async () => {
        const { executeOperation } = testEnvironment;
        // Save initial state
        const initialState = await saveDbState(testDriver);

        const DELETE_ALL_BMS = `
            mutation {
              deleteAllBms
            }
        `;

        try {
            const response = await executeOperation(DELETE_ALL_BMS);
            expect(response.body.kind).toBe('single');
            if (response.body.kind === 'single') {
                expect(response.body.singleResult.errors).toBeUndefined();
                expect(response.body.singleResult.data?.deleteAllBms).toBeTruthy();
            }

            // Verify database state
            const session = testDriver.session();
            try {
                const bookmarkCount = (await session.run('MATCH (b:Bookmark) RETURN count(b) as count'))
                    .records[0].get('count').toNumber();
                expect(bookmarkCount).toBe(0);

                const childPositions = (await session.run('MATCH (pm:ParentMeta) RETURN pm.childPositions as cp'))
                    .records.map(r => r.get('cp'));
                expect(childPositions.every(cp => cp.length === 0)).toBe(true);
            } finally {
                await session.close();
            }
        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        } finally {
            // Restore initial state
            await restoreDbState(testDriver, initialState);
        }
    });

    it('move bms to container', async () => {
        const { executeOperation } = testEnvironment;
        // Save initial state
        const initialState = await saveDbState(testDriver);

        const DELETE_ALL_BMS = `
            mutation {
              deleteAllBms
            }
        `;

        try {
            const response = await executeOperation(DELETE_ALL_BMS);
            expect(response.body.kind).toBe('single');
            if (response.body.kind === 'single') {
                expect(response.body.singleResult.errors).toBeUndefined();
                expect(response.body.singleResult.data?.deleteAllBms).toBeTruthy();
            }

            // Verify database state
            const session = testDriver.session();
            try {
                const bookmarkCount = (await session.run('MATCH (b:Bookmark) RETURN count(b) as count'))
                    .records[0].get('count').toNumber();
                expect(bookmarkCount).toBe(0);

                const childPositions = (await session.run('MATCH (pm:ParentMeta) RETURN pm.childPositions as cp'))
                    .records.map(r => r.get('cp'));
                expect(childPositions.every(cp => cp.length === 0)).toBe(true);
            } finally {
                await session.close();
            }
        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        } finally {
            // Restore initial state
            await restoreDbState(testDriver, initialState);
        }
    });
    it('move bms 2 CollNode', async () => {
        const {executeOperation, mockTx} = testEnvironment;
        // Save initial state

        const {bmIds, destCollId, sourceCollId} = (await mockTx.run(`
            match (:Member {id: $memberId})-->(c:Collection)
            WITH c, [ (c)-->(b:Bookmark) | b.id ][0] AS b
            match (:Member {id: $memberId})-->(blc:BmLooseContainer)
            WITH c, b, [ (blc)-->(b2:Bookmark) | b2.id ][0] AS b2
            limit 1
            match (:Member {id: $memberId})-->(c2:Collection)
            where c2.id <> c.id
            with collect(b) + collect(b2) as bmIds, c, c2
            return {bmIds: bmIds, destCollId: c2.id, sourceCollId: c.id} as r
        `,{memberId: memberIds[0]})).records[0].get('r');
        const pos = 1;


        const MUT = `
            mutation MoveBms2CollNode($destId: ID!, $ids: [ID!]!, $pos: Int) {
              moveBms2CollNode(destId: $destId, ids: $ids, pos: $pos)
            }
        `;

        const destChildIds = await ChildPosSvc.getChildIds(memberIds[0], destCollId, mockTx);
        const sourceChildIds = await ChildPosSvc.getChildIds(memberIds[0], sourceCollId, mockTx);
        const blcBmCount = await BLC_SvcDb.getBmCount(memberIds[0], mockTx);
        const sourceBmCount = await BmCont_SvcDb.getBmCount(memberIds[0], sourceCollId, mockTx);
        const destBmCount = await BmCont_SvcDb.getBmCount(memberIds[0], destCollId, mockTx);

        try {
            const response = await executeOperation(MUT, {destId: destCollId, ids: bmIds, pos});
            expect(response.body.singleResult.errors).toBeUndefined();

            const newDestChildIds = await ChildPosSvc.getChildIds(memberIds[0], destCollId, mockTx);
            expect(newDestChildIds.length).toBe(destChildIds.length + bmIds.length);
            expect(newDestChildIds.slice(pos - 1, pos - 1  + bmIds.length)).toEqual(bmIds);

            const newSourceChildIds = await ChildPosSvc.getChildIds(memberIds[0], sourceCollId, mockTx);
            expect(newSourceChildIds.length).toBe(sourceChildIds.length - 1);
            expect(newSourceChildIds).not.toContain(bmIds[0]);

            const newBlcBmCount = await BLC_SvcDb.getBmCount(memberIds[0], mockTx);
            expect(newBlcBmCount).toBe(blcBmCount - 1);

            const newSourceBmCount = await BmCont_SvcDb.getBmCount(memberIds[0], sourceCollId, mockTx);
            expect(newSourceBmCount).toBe(sourceBmCount - 1);

            const newDestBmCount = await BmCont_SvcDb.getBmCount(memberIds[0], destCollId, mockTx);
            expect(newDestBmCount).toBe(destBmCount + bmIds.length);
        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        } finally {
            // Restore initial state
            await mockTx.rollbackMock();
        }
    });
});

// You can create more test suites for different sets of operations
// describe('Other Operations', () => {
//     const {executeOperation} = createTestSuite();
//
//     // Add tests for other operations...
// });