import {FolderLabels} from "../type-defs/folder.js";
import {NodeSvc} from "../services/node.js";

export const Folder_SvcDb = {
    create: async (input: { name: string, parentId: string, position: number }, {tx, jwt}): Promise<string> => {
        return (await tx.run(`
            MATCH (m:Member {id: $memberId})
            MATCH (p:Parent {id: $parentId})
            CREATE (f:${FolderLabels.cypherList()} {id: $id, name: $name})
            CREATE (m)-[:OWNS]->(f)
            CREATE (p)-[:CONTAINS]->(f)
            RETURN f.id as r
        `, {
            id: NodeSvc.genFolderId(),
            name: input.name,
            parentId: input.parentId,
            memberId: jwt.sub
        })).records[0].get('r');
    }
}