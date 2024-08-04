import {collectionResolvers} from './collection.js';
import {generalResolvers} from './general.js';
import {hierarchNodesResolvers} from './hierarch_nodes.js';
// Define resolvers
import { mergeResolvers } from '@graphql-tools/merge';
import {folderResolvers} from "./folder.js";
import {bookmarkResolvers} from "./bookmark.js";

export const resolvers = mergeResolvers(
    [
        hierarchNodesResolvers,
        generalResolvers,
        bookmarkResolvers,
        collectionResolvers,
        folderResolvers]
);
