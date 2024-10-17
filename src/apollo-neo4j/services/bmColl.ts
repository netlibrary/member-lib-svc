import {ParentMetaSvc} from "./parent_meta.js";
import {CreateBookmarkDl} from "../../gen/types.js";
import {Bm_SvcDb} from "../../db/services/bm.js";


export const BmCollSvc = {
    create: async (data: CreateBookmarkDl, memberId, tx) => {
        const {
            parentId,
            position,
        } = data;

        const bmId = await Bm_SvcDb.create(data, memberId, tx)

        await ParentMetaSvc.addChildPositions(memberId, [bmId], parentId, position, tx)

        return bmId;
    }
}