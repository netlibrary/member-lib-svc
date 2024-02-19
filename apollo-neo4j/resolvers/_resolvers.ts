import {collectionResolvers} from './collection';
import {generalResolvers} from './general';
import {collectionTreeResolvers} from './collection-tree';
// Define resolvers
import {mergeResolvers} from '@graphql-tools/merge';
import {folderResolvers} from "./folder";
import {bookmarkResolvers} from "./bookmark";

export const resolvers = mergeResolvers(
    [
        collectionTreeResolvers,
        generalResolvers,
        bookmarkResolvers,
        collectionResolvers,
        folderResolvers]
);
