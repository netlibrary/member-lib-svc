import {CollectionLabels} from "../type-defs/collection.js";
import {MemberMetaLabels} from "../type-defs/memberMeta.js";
import {NodeSvc} from "../../apollo-neo4j/services/node.js";

export const Coll_SvcDb = {
    getCollInfosByIds: async (memberId, ids: string[], tx): Promise<any> => {
        return (await tx.run(`
            MATCH (m:Member {id: $memberId})-->(c:Collection)
            where c.id in $ids
            OPTIONAL MATCH path=(c)-[:CONTAINS*0..]->(f:Folder)
            WITH c, length(path) AS depth
            WITH c, MAX(depth) AS maxDepth
            OPTIONAL MATCH (c)-[:CONTAINS*0..]->(b:Bookmark)
            WITH c, COUNT(DISTINCT b) AS bmCount,maxDepth + 1 AS deepness
            WITH COLLECT({id: c.id, bmCount: bmCount, deepness: deepness}) AS r
            return r
        `, {ids, memberId})).records[0].get('r');
    },
    create: async (name: string, memberId, tx): Promise<string> => {
        return (await tx.run(`
            MATCH (m:Member {id: $memberId})
            CREATE (c:${CollectionLabels.cypherList()} {
                                id: $id,
                                name: $name
                            })
            CREATE (m)-[:OWNS]->(c)
            CREATE (mm:${MemberMetaLabels.cypherList()} {id: $mmId, childPositions: []})
            CREATE (c)-[:HAS]->(mm)
            RETURN c.id as r
        `, {
            id: NodeSvc.genCollId(),
            mmId: NodeSvc.genId(),
            name: name,
            memberId: memberId
        })).records[0].get('r');
    }
}