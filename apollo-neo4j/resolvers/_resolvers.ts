import { collectionResolvers } from './collection';
import { generalResolvers } from './general';
import { containerResolvers } from './container';
// Define resolvers
export const resolvers = {
  ...collectionResolvers,
  ...containerResolvers,
  ...generalResolvers
  };