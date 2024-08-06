import {collectionResolvers} from './collection.js';
import {generalResolvers} from './general.js';
import {collNodesResolvers} from './collNodes.js';
// Define resolvers
import { mergeResolvers } from '@graphql-tools/merge';
import {folderResolvers} from "./folder.js";
import {bookmarkResolvers} from "./bm.js";

export const resolvers = mergeResolvers(
    [
        collNodesResolvers,
        generalResolvers,
        bookmarkResolvers,
        collectionResolvers,
        folderResolvers]
);
