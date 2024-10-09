import {beforeAll, describe, expect, it} from "vitest";
import {createTestSuite, TestEnvironment} from "./_init.js";
import {testDriver} from "../helpers/driver.js";
import {Nodes, ParentChilds} from "../../src/apollo-neo4j/gen/types.js";
import {restoreDbState, saveDbState} from "../helpers/utils_db.js";
import {memberIds} from "../../global/vars.js";
import {ChildPosSvc} from "../../src/apollo-neo4j/services/child_pos.js";
import {getDriverTxMock} from "../helpers/tx.js";

describe('Collection Node Mutations', () => {
    let testEnvironment: TestEnvironment

    beforeAll(async () => {
        testEnvironment = await createTestSuite();
    });

    it('delete a collection', async () => {
        const {executeOperation} = testEnvironment;
        const {mockDriver, mockTx} = await getDriverTxMock()

        // query coll id
        let collId
        collId = (await mockTx.run('MATCH (c:Collection) RETURN c.id as id LIMIT 1')).records[0].get('id');
        expect(collId).toBeDefined();


        // query count of Nodes to be deleted
        let count


        count = (await mockTx.run('MATCH (c:Collection {id: $id}) optional match (c)-[r*]->(sub:CollNode) return count(sub) + 1 as count', {id: collId}))
            .records[0].get('count').toNumber();


        const selectedNodes: Nodes = {
            childs: [],
            collectionIds: [collId]
        }

        const MUT = `
            mutation DeleteManyNodes($nodes: Nodes!) {
              deleteManyNodes(nodes: $nodes)
            }
        `;

        try {
            const response = await executeOperation(mockDriver, MUT, {nodes: selectedNodes});
            expect(response.body.kind).toBe('single');
            if (response.body.kind === 'single') {
                expect(response.body.singleResult.errors).toBeUndefined();
                expect(Object.values(response.body.singleResult.data || {})[0]).eq(count);
            }

            // Verify database state


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

    it('delete a bm', async () => {
        const {executeOperation} = testEnvironment;
        const {mockDriver, mockTx} = await getDriverTxMock()

        // query parent id & bm id
        let bmId, parentId
        let session = testDriver.session();
        try {
            const r = (await session.run('MATCH (c:Collection) match (c)-[r]->(b:Bookmark) RETURN {bmId: b.id, parentId: c.id} as r LIMIT 1'))
                .records[0].get('r');
            bmId = r.bmId;
            parentId = r.parentId;
            expect(bmId).toBeDefined();
            expect(parentId).toBeDefined();
        } finally {
            await session.close();
        }

        // query child Positions
        let childPositions
        try {
            session = testDriver.session();
            childPositions = (await session.run('MATCH (p:Parent {id: $id}) match (p)-[r:HAS]->(pm:ParentMeta) return pm.childPositions as r limit 1', {id: parentId}))
                .records[0].get('r');
        } finally {
            await session.close();
        }

        const selectedNodes: Nodes = {
            childs: [{childIds: [bmId], parentId: parentId}],
            collectionIds: []
        }

        const MUT = `
            mutation DeleteManyNodes($nodes: SelectedNodes!) {
              deleteManyNodes(nodes: $nodes)
            }
        `;

        try {
            const response = await executeOperation(mockDriver, MUT, {nodes: selectedNodes});
            expect(response.body.kind).toBe('single');
            if (response.body.kind === 'single') {
                expect(response.body.singleResult.errors).toBeUndefined();
                expect(Object.values(response.body.singleResult.data || {})[0]).eq(1);
            }


                const newChildPositions = (await session.run('MATCH (p:Parent {id: $id}) match (p)-[r:HAS]->(pm:ParentMeta) return pm.childPositions as r limit 1', {id: parentId}))
                    .records[0].get('r');
                expect(newChildPositions.length).eq(childPositions.length - 1);
                expect(newChildPositions).not.contains(bmId);

        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        } finally {
            await mockTx.rollbackMock();
            await mockTx.closeMock()
        }
    });

    it('delete a coll & bms', async () => {
        const {executeOperation} = testEnvironment;
        const {mockDriver, mockTx} = await getDriverTxMock()

        // query coll, parentId & bmIds
        let collId
        const selectedChilds: ParentChilds[] = []
        let session = testDriver.session();

            collId = (await session.run('MATCH (c:Collection) RETURN c.id as id LIMIT 1'))
                .records[0].get('id');
            expect(collId).toBeDefined();
            const r = (await session.run(
                `
                MATCH (c:Collection {id: $id}) 
                match (c)-[r*]->(b:Bookmark) 
                with c, b
                LIMIT 3
                match (b)<-[r]-(f:Folder)
                with collect(b.id) as bookmarkIds, f.id as parentId
                RETURN collect({bookmarkIds: bookmarkIds , parentId: parentId}) as r                
                `, {id: collId}))
                .records[0].get('r');
            console.log(r);
            for (const obj of r) {
                selectedChilds.push({childIds: obj.bookmarkIds, parentId: obj.parentId});
            }


        const selectedNodes_MUT1: Nodes = {
            collectionIds: [collId],
            childs: []
        }
        const selectedNodes_MUT2: Nodes = {
            childs: selectedChilds,
            collectionIds: []
        }

        const MUT = `
            mutation DeleteManyNodes($nodes: SelectedNodes!) {
              deleteManyNodes(nodes: $nodes)
            }
        `;

        try {
            let response = await executeOperation(mockDriver, MUT, {nodes: selectedNodes_MUT1});
            expect(response.body.kind).toBe('single');
            expect(response.body.singleResult.errors).toBeUndefined();

            response = await executeOperation(mockDriver, MUT, {nodes: selectedNodes_MUT2});
            expect(response.body.kind).toBe('single');
            expect(response.body.singleResult.errors).toBeUndefined();
        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        } finally {
            // Restore initial state
            await mockTx.rollbackMock();
            await mockTx.closeMock()
        }
    });

    it('move bm 2 CollNode', async () => {
        const {executeOperation} = testEnvironment;
        const {mockDriver, mockTx} = await getDriverTxMock()

        const {bmId, parentId, destId} = (await mockTx.run(`
            match (:Member {id: $memberId})
            match (c:Collection)-->(b:Bookmark)
            match (c2:Collection)
            where c.id <> c2.id
            return {bmId: b.id, parentId: c.id, destId: c2.id} as r
        `, {memberId: memberIds[0]})).records[0].get('r');
        const parentChildsList: ParentChilds[] = [{parentId, childIds: [bmId]}];
        const MUT = `
            mutation MoveCollNodes2CollNode($parentChildsList: [ParentChilds!]!, $destId: ID!, $pos: Int) {
              moveCollNodes2CollNode(parentChildsList: $parentChildsList, destId: $destId, pos: $pos)
            }
        `;

        const destChildIds = await ChildPosSvc.getChildIds(memberIds[0], destId, mockTx as any);

        try {
            const response = await executeOperation(mockDriver, MUT, {parentChildsList, destId, pos: 1});
            expect(response.body.singleResult.errors).toBeUndefined();

            const bmMoved = (await mockTx.run(`
                match (c:Collection {id: $destId})-->(b:Bookmark {id: $bmId})
                RETURN true AS r
            `, {bmId, destId})).records[0]?.get('r');
            expect(bmMoved).toBe(true);

            const destChildIdsNew = await ChildPosSvc.getChildIds(memberIds[0], destId, mockTx as any);
            expect(destChildIdsNew.length).toBe(destChildIds.length + 1);
            expect(destChildIdsNew[0]).toBe(bmId);
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