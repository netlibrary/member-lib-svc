import {ParentMetaSvc} from "./parent_meta.js";
import {CreateBookmarkDl} from "../gen/types.js";
import {NodeSvc} from "./node.js";


export const BmCollSvc = {
    create: async (data: CreateBookmarkDl, memberId, ogm, tx) => {
        const {
            parentId,
            position,
            name,
            domainName, urlScheme,
            linkPath,
            iconUri,
            description
        } = data;

        const createBookmarkInput: any = {
            id: NodeSvc.genBmId(),
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
                connect: {where: {node: {id: parentId}}}
            }
        }

        const bookmark = await ogm.model("Bookmark").create({input: createBookmarkInput,});

        const bookmarkId = bookmark.bookmarks[0].id
        console.log(
            `Bookmark created with ID: ${bookmarkId}`
        );

        await ParentMetaSvc.addChildPositions(memberId, [bookmarkId], parentId, position, tx)

        return bookmarkId;
    }
}