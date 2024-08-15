import {CreateBookmarkDl} from "../gen/types.js";
import {BLC_SvcDb} from "../services_db/blc.js";
import {Transaction} from "neo4j-driver";


export const BmLooseSvc = {
    create: async (data: CreateBookmarkDl, memberId, tx: Transaction, ogm) => {
        const {
            name,
            domainName, urlScheme,
            linkPath,
            iconUri,
            description
        } = data;

        const blcId = await BLC_SvcDb.getId(memberId, tx)

        const createBookmarkInput: any = {
            description: description,
            name: name,
            domainName: domainName,
            urlScheme: urlScheme,
            linkPath: linkPath,
            iconUri: iconUri,
            member: {
                connect: {where: {node: {id: memberId}}},
            },
            parent: {
                connect: {where: {node: {id: blcId}}}
            }
        }

        const bookmark = await ogm.model("Bookmark").create({input: createBookmarkInput,});

        const bookmarkId = bookmark.bookmarks[0].id
        console.log(
            `Bookmark created with ID: ${bookmarkId}`
        );

        return bookmarkId;
    },
    getAllIds: async (memberId: string, tx: Transaction): Promise<string[]> => {
        return (await tx.run(`
                    MATCH (m:Member {id: $memberId})-->(blc:BmLooseContainer)-->(b:Bookmark)
                    RETURN collect(b.id) as r
                `, {memberId: memberId})).records[0].get('r')
    }
}