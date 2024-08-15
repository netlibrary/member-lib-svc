import {beforeAll, describe, expect, it} from "vitest";
import {createTestSuite} from "./_init.js";
import {testDriver} from "../helpers/driver.js";
import {SelectedChilds, SelectedNodes} from "../../src/apollo-neo4j/gen/types.js";
import {restoreDbState, saveDbState} from "../helpers/utils_db.js";

describe('Collection Node Mutations', () => {
    let testEnvironment: {
        executeOperation: (query: string, variables?: any) => Promise<any>;
    };

    beforeAll(async () => {
        testEnvironment = await createTestSuite();
    });

    it('delete a collection', async () => {
        const { executeOperation } = testEnvironment;
        // Save initial state
        const initialState = await saveDbState(testDriver);

        // query coll id
        let collId
        let session = testDriver.session();
        try {
            collId = (await session.run('MATCH (c:Collection) RETURN c.id as id LIMIT 1'))
                .records[0].get('id');
            expect(collId).toBeDefined();
        } finally {
            await session.close();
        }

        // query count of Nodes to be deleted
        let count
        try {
            session = testDriver.session();
            count = (await session.run('MATCH (c:Collection {id: $id}) optional match (c)-[r*]->(sub:CollNode) return count(sub) + 1 as count', {id: collId}))
                .records[0].get('count').toNumber();
        } finally {
            await session.close();
        }

        const selectedNodes: SelectedNodes = {
            childs: [],
            collectionIds: [collId]
        }

        const MUT = `
            mutation DeleteManyNodes($nodes: SelectedNodes!) {
              deleteManyNodes(nodes: $nodes)
            }
        `;

        try {
            const response = await executeOperation(MUT, {nodes: selectedNodes});
            expect(response.body.kind).toBe('single');
            if (response.body.kind === 'single') {
                expect(response.body.singleResult.errors).toBeUndefined();
                expect(Object.values(response.body.singleResult.data || {})[0]).eq(count);
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

    it('delete a bm', async () => {
        const { executeOperation } = testEnvironment;
        // Save initial state
        const initialState = await saveDbState(testDriver);

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

        const selectedNodes: SelectedNodes = {
            childs: [{bookmarkIds: [bmId], parentId: parentId, folderIds: []}],
            collectionIds: []
        }

        const MUT = `
            mutation DeleteManyNodes($nodes: SelectedNodes!) {
              deleteManyNodes(nodes: $nodes)
            }
        `;

        try {
            const response = await executeOperation(MUT, {nodes: selectedNodes});
            expect(response.body.kind).toBe('single');
            if (response.body.kind === 'single') {
                expect(response.body.singleResult.errors).toBeUndefined();
                expect(Object.values(response.body.singleResult.data || {})[0]).eq(1);
            }

            // Verify database state
            const session = testDriver.session();
            try {
                const newChildPositions = (await session.run('MATCH (p:Parent {id: $id}) match (p)-[r:HAS]->(pm:ParentMeta) return pm.childPositions as r limit 1', {id: parentId}))
                    .records[0].get('r');
                expect(newChildPositions.length).eq(childPositions.length - 1);
                expect(newChildPositions).not.contains(bmId);
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

    it('delete a coll & bms', async () => {
        const { executeOperation } = testEnvironment;
        // Save initial state
        const initialState = await saveDbState(testDriver);

        // query coll, parentId & bmIds
        let collId
        const selectedChilds: SelectedChilds[] = []
        let session = testDriver.session();
        try {
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
            for(const obj of r) {
                selectedChilds.push({bookmarkIds: obj.bookmarkIds, parentId: obj.parentId});
            }
        } finally {
            await session.close();
        }

        const selectedNodes_MUT1: SelectedNodes = {
            collectionIds: [collId]
        }
        const selectedNodes_MUT2: SelectedNodes = {
            childs: selectedChilds
        }

        const MUT = `
            mutation DeleteManyNodes($nodes: SelectedNodes!) {
              deleteManyNodes(nodes: $nodes)
            }
        `;

        try {
            let response = await executeOperation(MUT, {nodes: selectedNodes_MUT1});
            expect(response.body.kind).toBe('single');
            expect(response.body.singleResult.errors).toBeUndefined();

            response = await executeOperation(MUT, {nodes: selectedNodes_MUT2});
            expect(response.body.kind).toBe('single');
            expect(response.body.singleResult.errors).toBeUndefined();
        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        } finally {
            // Restore initial state
            await restoreDbState(testDriver, initialState);
        }
    });
});