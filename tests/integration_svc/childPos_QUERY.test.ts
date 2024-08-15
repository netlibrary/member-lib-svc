import {beforeAll, describe, expect, it} from "vitest";
import {createTestSuite} from "./_init.js";
import {OGM} from "@neo4j/graphql-ogm";
import {Transaction} from "neo4j-driver";
import {ChildPosSvc} from "../../src/apollo-neo4j/services/child_pos.js";
import {memberIds} from "../../global/vars.js";


describe('Child Positions Queries', () => {
    let testEnvironment: {
        ogm: OGM;
        tx: Transaction;
    };

    beforeAll(async () => {
        testEnvironment = await createTestSuite();
    });

    it('bm child pos ids should be equal to coll bm ids', async () => {
        const {tx} = testEnvironment;
        // Save initial state
        try {
            const childIds = await ChildPosSvc.getAllBmIds(memberIds[0], tx)

            const collBmCount = (await tx.run(`
            match (m:Member {id: $memberId})-[*1]->(:Collection)-[*1..]->(bm:Bookmark)
            WITH DISTINCT bm
            return count(bm) as r
        `, {memberId: memberIds[0]})).records[0].get('r').toNumber();

            const firstChildId = childIds[0];

            expect(childIds.length).toBe(collBmCount);
        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        }
    });
});