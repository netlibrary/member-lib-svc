import {FolderLabels} from "../type-defs/folder.js";
import {NodeSvc} from "../services/node.js";
import {ParentMetaLabels} from "../type-defs/parentMeta.js";
import {BookmarkLabels} from "../type-defs/bm.js";
import {CreateBookmarkDl} from "../gen/types.js";

export const Bm_SvcDb = {
    create: async (data: CreateBookmarkDl, memberId, tx): Promise<string> => {
        return (await tx.run(`
            MATCH (m:Member {id: $memberId})
            MATCH (bc:BmContainer {id: $parentId})
            CREATE (b:${BookmarkLabels.cypherList()} {
                                id: $id,
                                description: $description,
                                name: $name,
                                domainName: $domainName,
                                urlScheme: $urlScheme,
                                linkPath: $linkPath,
                                iconUri: $iconUri
                            })
            CREATE (m)-[:OWNS]->(b)
            CREATE (bc)-[:CONTAINS]->(b)
            RETURN b.id as r
        `, {
            id: NodeSvc.genFolderId(),
            name: data.name,
            parentId: data.parentId,
            description: data.description || '',
            domainName: data.domainName,
            urlScheme: data.urlScheme,
            linkPath: data.linkPath,
            iconUri: data.iconUri || '',
            memberId: memberId
        })).records[0].get('r');
    },
    get: async (id: string, tx): Promise<any> => {
        return (await tx.run(`
            MATCH (b:Bookmark {id: $id})
            RETURN b
        `, {id})).records[0].get('f').properties;
    },
}