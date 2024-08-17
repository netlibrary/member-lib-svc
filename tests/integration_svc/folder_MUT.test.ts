import {beforeAll, describe, expect, it} from "vitest";
import {createTestSuite} from "./_init.js";
import {testDriver} from "../helpers/driver.js";
import {ParentChilds, SelectedChilds, SelectedNodes} from "../../src/apollo-neo4j/gen/types.js";
import {restoreDbState, saveDbState} from "../helpers/utils_db.js";
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
            const folderId = await Folder_SvcDb.create({name, parentId, position}, {tx, jwt: {sub: memberIds[0]}});
            const f = await Folder_SvcDb.get(folderId, tx);
            const pm = await Folder_SvcDb.getParentMeta(folderId, tx);
            const destChildIdsNew = await ChildPosSvc.getChildIds(memberIds[0], folderId, tx);
            expect(f).toBeDefined();

        } catch (error) {
            console.error("Error in test:", error);
            throw error;
        } finally {
            // Restore initial state
            await tx.rollbackMock();
        }
    });
});