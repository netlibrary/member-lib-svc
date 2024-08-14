import {collectionResolvers} from './collection.js';
import {generalResolvers} from './general.js';
import {collNodesResolvers} from './collNodes.js';
// Define resolvers
import { mergeResolvers } from '@graphql-tools/merge';
import {folderResolvers} from "./folder.js";
import {bookmarkResolvers} from "./bm.js";
import {Context} from "../context.js";
import { IResolvers } from '@graphql-tools/utils';
import {Resolvers} from "../gen/types.js";
import {member_QUERY_resolvers} from "./member_QUERY.js";

export const resolvers: Resolvers = mergeResolvers(
    [
        collNodesResolvers,
        generalResolvers,
        bookmarkResolvers,
        collectionResolvers,
        folderResolvers,
        member_QUERY_resolvers]
);
