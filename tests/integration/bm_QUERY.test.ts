import {beforeAll, describe, expect, it} from "vitest";
import {createTestSuite} from "./_init.js";
import {restoreDbState, saveDbState} from "./_utils.js";
import {testDriver} from "../helpers/driver.js";

describe('Bookmark Queries', () => {
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
            console.log("Response from executeOperation:", response);
            expect(response.body.kind).toBe('single');
            if (response.body.kind === 'single') {
                expect(response.body.singleResult.errors).toBeUndefined();
                expect(response.body.singleResult.data?.deleteAllBms).toBeTruthy();
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