import {Transaction} from "neo4j-driver";

export const BmCont_SvcDb = {
    getBmCount: async (memberId, id, tx: Transaction): Promise<number> => {
        // move bms to bmLooseContainer
        // set parentMeta.childPositions to [folderIds]
        return (await tx.run(`
            MATCH (m:Member {id: $memberId})-->(bc:BmContainer {id: $id})
            MATCH (bc)-[*1..]->(b:Bookmark)
            return count(b) as r
        `, {memberId, id})).records[0].get('r').toNumber(); // Note that we're now passing an array of ids
    },
}