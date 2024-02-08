import { collectionResolvers } from './collection';
import { generalResolvers } from './general';
import { collectionTreeResolvers } from './collection-tree';
// Define resolvers
import { mergeResolvers } from '@graphql-tools/merge';

export const resolvers = mergeResolvers([collectionTreeResolvers, generalResolvers, collectionResolvers]);
