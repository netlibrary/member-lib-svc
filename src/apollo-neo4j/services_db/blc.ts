import {Transaction} from "neo4j-driver";

export const BLC_SvcDb = {
    getId: async (memberId, tx: Transaction): Promise<string> => {
        // move bms to bmLooseContainer
        // set parentMeta.childPositions to [folderIds]
        return (await tx.run(`
            MATCH (m:Member {id: $memberId})-[r]->(blc:BmLooseContainer)
            with blc
            LIMIT 1
            return blc.id as r
        `, {memberId})).records[0].get('r'); // Note that we're now passing an array of ids
    },
    getBmCount: async (memberId, tx: Transaction): Promise<number> => {
        // move bms to bmLooseContainer
        // set parentMeta.childPositions to [folderIds]
        return (await tx.run(`
            MATCH (m:Member {id: $memberId})-->(blc:BmLooseContainer)
            MATCH (blc)-[*1..]->(b:Bookmark)
            return count(b) as r
        `, {memberId})).records[0].get('r').toNumber(); // Note that we're now passing an array of ids
    },
}