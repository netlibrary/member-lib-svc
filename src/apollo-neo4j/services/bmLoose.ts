import {CreateBookmarkDl} from "../../gen/types.js";
import {Transaction} from "neo4j-driver";
import {BLC_SvcDb} from "../../db/services/blc.js";
import {Bm_SvcDb} from "../../db/services/bm.js";


export const BmLooseSvc = {
    create: async (data: CreateBookmarkDl, memberId, tx: Transaction) => {
        data.parentId = await BLC_SvcDb.getId(memberId, tx)
        const bmId = await Bm_SvcDb.create(data, memberId, tx)
        return bmId;
    },
    getAllIds: async (memberId: string, tx: Transaction): Promise<string[]> => {
        return (await tx.run(`
                    MATCH (m:Member {id: $memberId})-->(blc:BmLooseContainer)-->(b:Bookmark)
                    RETURN collect(b.id) as r
                `, {memberId: memberId})).records[0].get('r')
    }
}