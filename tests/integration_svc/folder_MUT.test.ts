import {beforeAll, describe, expect, it} from "vitest";
import {createTestSuite} from "./_init.js";
import {memberIds} from "../../global/vars.js";
import {ChildPosSvc} from "../../src/apollo-neo4j/services/child_pos.js";
import {OGM} from "@neo4j/graphql-ogm";
import {Folder_SvcDb} from "../../src/apollo-neo4j/services_db/folder.js";

describe('Folder Svc', () => {
    let testEnvironment: {
        ogm: OGM;
        tx: any;
    };

    beforeAll(async () => {
        testEnvironment = await createTestSuite();
    });

    it('create ', async () => {
        const {tx} = testEnvironment;
        // Save initial state

        const {parentId} = (await tx.run(`
            match (:Member {id: $memberId})
            match (c:Collection)
            return {parentId: c.id} as r
        `,{memberId: memberIds[0]})).records[0].get('r');
        const name = 'testFolder';
        const position = 1;

        try {
            const folderId = await Folder_SvcDb.create({name, parentId}, {tx, jwt: {sub: memberIds[0]}});
            expect(folderId).toBeDefined();
            const f = await Folder_SvcDb.get(folderId, tx);
            expect(f.id).toBeDefined();
            const pm = await Folder_SvcDb.getParentMeta(folderId, tx);
            expect(pm.id).toBeDefined();
            const pmChildPositions = await ChildPosSvc.getChildIds(memberIds[0], folderId, tx);
            expect(pmChildPositions).toBeDefined();
            expect(pmChildPositions).toEqual([]);
        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        } finally {
            // Restore initial state
            await tx.rollbackMock();
        }
    });
});