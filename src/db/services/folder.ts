import {FolderLabels} from "../type-defs/folder.js";
import {ParentMetaLabels} from "../type-defs/parentMeta.js";
import {NodeSvc} from "../../apollo-neo4j/services/node.js";

export const Folder_SvcDb = {
    create: async (input: { name: string, parentId: string }, {tx, jwt}): Promise<string> => {
        return (await tx.run(`
            MATCH (m:Member {id: $memberId})
            MATCH (p:Parent {id: $parentId})
            CREATE (f:${FolderLabels.cypherList()} {id: $id, name: $name})
            CREATE (m)-[:OWNS]->(f)
            CREATE (p)-[:CONTAINS]->(f)
            CREATE (pm:${ParentMetaLabels.cypherList()} {id: $pmId, childPositions: []})
            CREATE (f)-[:HAS]->(pm)
            RETURN f.id as r
        `, {
            id: NodeSvc.genFolderId(),
            name: input.name,
            parentId: input.parentId,
            memberId: jwt.sub,
            pmId: NodeSvc.genId()
        })).records[0].get('r');
    },
    get: async (id: string, tx): Promise<any> => {
        return (await tx.run(`
            MATCH (f:Parent {id: $id})
            RETURN f
        `, {id})).records[0].get('f').properties;
    },
    getParentMeta: async (folderId: string, tx): Promise<any> => {
        return (await tx.run(`
            MATCH (f:Parent {id: $folderId})-->(pm:ParentMeta)
            RETURN pm
        `, {folderId})).records[0].get('pm').properties;
    }
}