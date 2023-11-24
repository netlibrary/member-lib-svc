import { gql } from 'apollo-server';

export const bookmarkMutTypeDefs = gql`
  extend type Mutation {
    // Define your mutations here
    createBookmark(bookmarkInput: BookmarkInput!): Bookmark
    updateBookmark(bookmarkId: ID!, bookmarkInput: BookmarkInput!): Bookmark
    deleteBookmark(bookmarkId: ID!): Boolean
  }
`;

export const getBookmarkMutRvrs = (models) => {
  return {
    Mutation: {
      // Define your mutation resolvers here
      addBookmark: (_, { bookmarkInput }) => {
        // Implementation for adding a bookmark
      },
      updateBookmark: (_, { bookmarkId, bookmarkInput }) => {
        // Implementation for updating a bookmark
      },
      deleteBookmark: (_, { bookmarkId }) => {
        // Implementation for deleting a bookmark
      },
    },
  };
}