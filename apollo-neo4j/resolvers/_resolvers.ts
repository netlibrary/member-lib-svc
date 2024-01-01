import { collectionResolvers } from './collection';
import { generalResolvers } from './general';
import { collectionTreeResolvers } from './collection-tree';
// Define resolvers
export const resolvers = {
  ...collectionResolvers,
  ...collectionTreeResolvers,
  ...generalResolvers
  };