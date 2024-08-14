import {getOgm_Bookmark} from "../../../global/ogm.js";
import {ParentMetaSvc} from "./parent_meta.js";
import {CreateBookmarkDl} from "../gen/types.js";


export const BmCollSvc = {
    create: async (data: CreateBookmarkDl) => {
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
            description: description,
            name: name,
            domainName: domainName,
            urlScheme: urlScheme,
            linkPath: linkPath,
            iconUri: iconUri,
            parent: {
                connect: {where: {node: {id: parentId}}}
            }
        }

        const bookmark = await getOgm_Bookmark().create({input: createBookmarkInput,});

        const bookmarkId = bookmark.bookmarks[0].id
        console.log(
            `Bookmark created with ID: ${bookmarkId}`
        );

        await ParentMetaSvc.addChildPositions(bookmarkId, parentId, position)

        return bookmarkId;
    }
}