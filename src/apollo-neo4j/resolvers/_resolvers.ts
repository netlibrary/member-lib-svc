import {collectionResolvers} from './collection';
import {generalResolvers} from './general';
import {hierarchNodesResolvers} from './hierarch_nodes';
// Define resolvers
import { mergeResolvers } from '@graphql-tools/merge';
import {folderResolvers} from "./folder";
import {bookmarkResolvers} from "./bookmark";

export const resolvers = mergeResolvers(
    [
        hierarchNodesResolvers,
        generalResolvers,
        bookmarkResolvers,
        collectionResolvers,
        folderResolvers]
);
