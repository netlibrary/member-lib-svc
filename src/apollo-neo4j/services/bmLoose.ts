import {getOgm_Bookmark} from "../../../global/ogm.js";
import {ParentMetaSvc} from "./parent_meta.js";
import {CreateBookmarkDl} from "../gen/types.js";
import {BLC_SvcDb} from "../services_db/blc.js";
import {Transaction} from "neo4j-driver";


export const BmLooseSvc = {
    create: async (data: CreateBookmarkDl, tx: Transaction) => {
        const {
            name,
            domainName, urlScheme,
            linkPath,
            iconUri,
            description
        } = data;

        const blcId = await BLC_SvcDb.getId(tx)

        const createBookmarkInput: any = {
            description: description,
            name: name,
            domainName: domainName,
            urlScheme: urlScheme,
            linkPath: linkPath,
            iconUri: iconUri,
            parent: {
                connect: {where: {node: {id: blcId}}}
            }
        }

        const bookmark = await getOgm_Bookmark().create({input: createBookmarkInput,});

        const bookmarkId = bookmark.bookmarks[0].id
        console.log(
            `Bookmark created with ID: ${bookmarkId}`
        );

        return bookmarkId;
    }
}