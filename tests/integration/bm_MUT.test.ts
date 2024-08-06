import {describe, expect, it} from 'vitest';
import {createTestSuite, MyContext} from "./_init.js";
import {beforeAll, afterAll} from "vitest";
import {ApolloServer} from "@apollo/server";


describe('Bookmark Mutations', () => {
    let testEnvironment: {
        executeOperation: (query: string, variables?: any) => Promise<any>;
    };

    beforeAll(async () => {
        testEnvironment = await createTestSuite();
        console.log("Test environment created:", testEnvironment);
    });

    it('should delete all bookmarks', async () => {
        const { executeOperation } = testEnvironment;

        const DELETE_ALL_BMS = `
            mutation {
              deleteAllBms
            }
        `;

        try {
            const response = await executeOperation(DELETE_ALL_BMS);
            console.log("Response from executeOperation:", response);

            expect(response.body.kind).toBe('single');
        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        }
    });
});

// You can create more test suites for different sets of operations
// describe('Other Operations', () => {
//     const {executeOperation} = createTestSuite();
//
//     // Add tests for other operations...
// });