import {beforeAll, describe, expect, it} from "vitest";
import {createTestSuite} from "./_init.js";
import {OGM} from "@neo4j/graphql-ogm";
import {Transaction} from "neo4j-driver";
import {ChildPosSvc} from "../../src/apollo-neo4j/services/child_pos.js";
import {memberIds} from "../../global/vars.js";
import {CollChildType} from "../../src/models/coll.js";


describe('Child Positions Queries', () => {
    let testEnvironment: {
        ogm: OGM;
        tx: Transaction;
    };

    beforeAll(async () => {
        testEnvironment = await createTestSuite();
    });

    it('all child pos count should be equal to all coll bm count', async () => {
        const {tx} = testEnvironment;
        // Save initial state
        try {
            const childIds = await ChildPosSvc.getAllBmIds(memberIds[0], tx)

            const collBmCount = (await tx.run(`
            match (m:Member {id: $memberId})-[*1]->(:Collection)-[*1..]->(bm:Bookmark)
            WITH DISTINCT bm
            return count(bm) as r
        `, {memberId: memberIds[0]})).records[0].get('r').toNumber();

            expect(childIds.length).toBe(collBmCount);
        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        }
    });
    it('bm count should be equal to child pos count', async () => {
        const {tx} = testEnvironment;
        // Save initial state
        try {
            const parentId = (await tx.run(`
            match (:Bookmark)<--(p:Parent)
            return p.id as r
            limit 1
            `)).records[0].get('r')

            const childIds = await ChildPosSvc.getChildIds(memberIds[0], parentId, CollChildType.Bookmark, tx)

            const collBmCount = (await tx.run(`
            match (:Parent {id: $parentId})-->(bm:Bookmark)
            return count(bm) as r
        `, {parentId})).records[0].get('r').toNumber();

            expect(childIds.length).toBe(collBmCount);
        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        }
    });
});