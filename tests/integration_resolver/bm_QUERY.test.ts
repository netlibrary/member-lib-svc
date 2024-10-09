import {beforeAll, describe, expect, it} from "vitest";
import {createTestSuite, TestEnvironment} from "./_init.js";

import {getDriverTxMock} from "../helpers/tx.js";

describe('Bookmark Queries', () => {
    let testEnvironment: TestEnvironment

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
            await mockTx.rollbackMock();
            await mockTx.closeMock()
        }
    });
});