import {beforeAll, describe, expect, it} from 'vitest';
import {createTestSuite} from "./_init.js";
import {restoreDbState, saveDbState} from "./_utils.js";
import {testDriver} from "../helpers/driver.js";


describe('Bookmark Mutations', () => {
    let testEnvironment: {
        executeOperation: (query: string, variables?: any) => Promise<any>;
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
});

// You can create more test suites for different sets of operations
// describe('Other Operations', () => {
//     const {executeOperation} = createTestSuite();
//
//     // Add tests for other operations...
// });