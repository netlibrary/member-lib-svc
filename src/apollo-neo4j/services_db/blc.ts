import {Transaction} from "neo4j-driver";

export const BLC_SvcDb = {
    getId: async (tx: Transaction): Promise<string> => {
        // move bms to bmLooseContainer
        // set parentMeta.childPositions to [folderIds]
        return (await tx.run(`
            MATCH (blc:BmLooseContainer)
            with blc
            LIMIT 1
            return blc.id as r
        `)).records[0].get('r'); // Note that we're now passing an array of ids
    },
}