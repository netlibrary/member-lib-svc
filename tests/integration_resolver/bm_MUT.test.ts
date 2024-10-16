import {beforeAll, describe, expect, it} from 'vitest';
import {createTestSuite, TestEnvironment} from "./_init.js";
import {memberIds} from "../../global/vars.js";
import {ChildPosSvc} from "../../src/apollo-neo4j/services/child_pos.js";

import {getDriverTxMock} from "../helpers/tx.js";
import {BmCont_SvcDb} from "../../src/db/services/bmContainer.js";
import {BLC_SvcDb} from "../../src/db/services/blc.js";


describe('Bookmark Mutations', () => {
    let testEnvironment: TestEnvironment;

    beforeAll(async () => {
        testEnvironment = await createTestSuite();
    });

    it('should delete all bookmarks', async () => {
        const {executeOperation} = testEnvironment;
        const {mockDriver, mockTx} = await getDriverTxMock()

        const DELETE_ALL_BMS = `
            mutation {
              deleteAllBms
            }
        `;

        try {
            const response = await executeOperation(mockDriver, DELETE_ALL_BMS);
            expect(response.body.kind).toBe('single');
            if (response.body.kind === 'single') {
                expect(response.body.singleResult.errors).toBeUndefined();
                expect(response.body.singleResult.data?.deleteAllBms).toBeTruthy();
            }

            // Verify database state

            const bookmarkCount = (await mockTx.run('MATCH (b:Bookmark) RETURN count(b) as count'))
                .records[0].get('count').toNumber();
            expect(bookmarkCount).toBe(0);


            const childPositions = (await mockTx.run('MATCH (pm:ParentMeta) RETURN pm.childPositions as cp'))
                .records.map(r => r.get('cp'));

            // check that every child position starts with 'f:'
            expect(childPositions.every(cp => cp.every(id => id.startsWith('f:')))).toBe(true);

        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        } finally {
            // Restore initial state
            await mockTx.rollbackMock();
            await mockTx.closeMock()
        }
    });

    it('move bms to container', async () => {
        const {executeOperation} = testEnvironment;
        const {mockDriver, mockTx} = await getDriverTxMock()

        const DELETE_ALL_BMS = `
            mutation {
              deleteAllBms
            }
        `;

        try {
            const response = await executeOperation(mockDriver, DELETE_ALL_BMS);
            expect(response.body.kind).toBe('single');
            if (response.body.kind === 'single') {
                expect(response.body.singleResult.errors).toBeUndefined();
                expect(response.body.singleResult.data?.deleteAllBms).toBeTruthy();
            }


            const bookmarkCount = (await mockTx.run('MATCH (b:Bookmark) RETURN count(b) as count'))
                .records[0].get('count').toNumber();
            expect(bookmarkCount).toBe(0);

            const childPositions = (await mockTx.run('MATCH (pm:ParentMeta) RETURN pm.childPositions as cp'))
                .records.map(r => r.get('cp'));
            expect(childPositions.every(cp => cp.length === 0)).toBe(true);

        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        } finally {
            // Restore initial state
            await mockTx.rollbackMock();
            await mockTx.closeMock()
        }
    });
    it('move bms 2 CollNode', async () => {
        const {executeOperation} = testEnvironment;
        const {mockDriver, mockTx} = await getDriverTxMock()

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
        `, {memberId: memberIds[0]})).records[0].get('r');
        const pos = 1;


        const MUT = `
            mutation MoveBms2CollNode($destId: ID!, $ids: [ID!]!, $pos: Int) {
              moveBms2CollNode(destId: $destId, ids: $ids, pos: $pos)
            }
        `;

        const destChildIds = await ChildPosSvc.getChildIds(memberIds[0], destCollId, mockTx as any);
        const sourceChildIds = await ChildPosSvc.getChildIds(memberIds[0], sourceCollId, mockTx as any);
        const blcBmCount = await BLC_SvcDb.getBmCount(memberIds[0], mockTx as any);
        const sourceBmCount = await BmCont_SvcDb.getBmCount(memberIds[0], sourceCollId, mockTx as any);
        const destBmCount = await BmCont_SvcDb.getBmCount(memberIds[0], destCollId, mockTx as any);

        try {
            const response = await executeOperation(mockDriver, MUT, {destId: destCollId, ids: bmIds, pos});
            expect(response.body.singleResult.errors).toBeUndefined();

            const newDestChildIds = await ChildPosSvc.getChildIds(memberIds[0], destCollId, mockTx as any);
            expect(newDestChildIds.length).toBe(destChildIds.length + bmIds.length);
            expect(newDestChildIds.slice(pos - 1, pos - 1 + bmIds.length)).toEqual(bmIds);

            const newSourceChildIds = await ChildPosSvc.getChildIds(memberIds[0], sourceCollId, mockTx as any);
            expect(newSourceChildIds.length).toBe(sourceChildIds.length - 1);
            expect(newSourceChildIds).not.toContain(bmIds[0]);

            const newBlcBmCount = await BLC_SvcDb.getBmCount(memberIds[0], mockTx as any);
            expect(newBlcBmCount).toBe(blcBmCount - 1);

            const newSourceBmCount = await BmCont_SvcDb.getBmCount(memberIds[0], sourceCollId, mockTx as any);
            expect(newSourceBmCount).toBe(sourceBmCount - 1);

            const newDestBmCount = await BmCont_SvcDb.getBmCount(memberIds[0], destCollId, mockTx as any);
            expect(newDestBmCount).toBe(destBmCount + bmIds.length);
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

// You can create more test suites for different sets of operations
// describe('Other Operations', () => {
//     const {executeOperation} = createTestSuite();
//
//     // Add tests for other operations...
// });