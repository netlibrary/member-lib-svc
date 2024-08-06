import {collNodes_MUT_resolvers} from "./collNodes_MUT.js";
import {collNodes_QUERY_resolvers} from "./collNodes_QUERY.js";

export const collNodesResolvers = {
    ChildDl: {
        __resolveType(obj, context, info) {
            // Logic to determine the type
            console.log("ChildDl", obj)
            // Check if the object contains the key 'domainName'
            if ('domainName' in obj) {
                return "BookmarkDl";
            } else {
                return "FolderDl";
            }
        },
    },
    Child: {
        __resolveType(obj, context, info) {
            if (obj.someBookmarkProperty) {
                return "Bookmark";
            }

            if (obj.someFolderProperty) {
                return "Folder";
            }

            return null; // Or handle the error case
        },
    },
    Mutation: collNodes_MUT_resolvers,
    Query: collNodes_QUERY_resolvers
};
