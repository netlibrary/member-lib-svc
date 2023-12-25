import { collectionResolvers } from './collection';
import { generalResolvers } from './general';
// Define resolvers
export const resolvers = {
  ...collectionResolvers,
  ...generalResolvers
  };