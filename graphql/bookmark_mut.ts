import { gql } from 'apollo-server';

export const mutationTypeDefs = gql`
  extend type Mutation {
    // Define your mutations here
    addBookmark(bookmarkInput: BookmarkInput!): Bookmark
    updateBookmark(bookmarkId: ID!, bookmarkInput: BookmarkInput!): Bookmark
    deleteBookmark(bookmarkId: ID!): Boolean
  }
`;

export const mutationResolvers = {
  Mutation: {
    // Define your mutation resolvers here
    addBookmark: (_, { bookmarkInput }) => {
      // Implementation
    },
    updateBookmark: (_, { bookmarkId, bookmarkInput }) => {
      // Implementation
    },
    deleteBookmark: (_, { bookmarkId }) => {
      // Implementation
    },
  },
};