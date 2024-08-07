import {beforeAll, describe, expect, it} from 'vitest';
import {createTestSuite} from "./_init.js";
import {restoreDbState, saveDbState} from "./_utils.js";
import {testDriver} from "../helpers/driver.js";


describe('Dummy for state preserving', () => {
    let testEnvironment: {
        executeOperation: (query: string, variables?: any) => Promise<any>;
    };

    beforeAll(async () => {
        testEnvironment = await createTestSuite();
    });

    it('dummy test', async () => {
        const { executeOperation } = testEnvironment;
        // Save initial state
        const initialState = await saveDbState(testDriver);
        try {
            console.log('Dummy test')
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