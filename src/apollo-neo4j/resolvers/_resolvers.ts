import {collection_MUT_Resolvers} from './collection_MUT.js';
import {generalResolvers} from './general.js';
import {collNodesResolvers} from './collNodes.js';
// Define resolvers
import {mergeResolvers} from '@graphql-tools/merge';
import {folderResolvers} from "./folder.js";
import {bookmarkResolvers} from "./bm.js";
import {Resolvers} from "../gen/types.js";
import {member_QUERY_resolvers} from "./member_QUERY.js";
import {collResolvers} from "./collection.js";

export const resolvers: Resolvers = mergeResolvers(
    [
        collNodesResolvers,
        generalResolvers,
        bookmarkResolvers,
        bookmarkResolvers,
        collResolvers,
        folderResolvers,
        member_QUERY_resolvers]
);
