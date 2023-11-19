import { gql } from 'apollo-server';

export const collectionMutationTypeDefs = gql`
  extend type Mutation {
    // Define your mutations here
    addCollection(collectionInput: CollectionInput!): Collection
    updateCollection(collectionId: ID!, collectionInput: CollectionInput!): Collection
    deleteCollection(collectionId: ID!): Boolean
  }
`;

export const collectionMutationResolvers = {
  Mutation: {
    // Define your mutation resolvers here
    addCollection: (_, { collectionInput }) => {
      // Implementation for adding a collection
    },
    updateCollection: (_, { collectionId, collectionInput }) => {
      // Implementation for updating a collection
    },
    deleteCollection: (_, { collectionId }) => {
      // Implementation for deleting a collection
    },
  }
};