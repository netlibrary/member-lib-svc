import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Bookmark {
    id: ID!
    createdAt: String
    updatedAt: String
    description: String
    title: String
    position: Int
    domainName: String
    urlScheme: String
    linkPath: String
  }

  type Collection {
    id: ID!
    createdAt: String
    updatedAt: String
    name: String
    position: Int
    bookmarks: [Bookmark] @relationship(type: "CONTAINS", direction: OUT)
    folders: [Folder] @relationship(type: "CONTAINS", direction: OUT)
  }

  type Folder {
    id: ID!
    createdAt: String
    updatedAt: String
    name: String
    position: Int
    bookmarks: [Bookmark] @relationship(type: "CONTAINS", direction: OUT)
    folders: [Folder] @relationship(type: "CONTAINS", direction: OUT)
  }

  type Member {
    id: ID!
    collections: [Collection] @relationship(type: "OWNED_BY", direction: OUT)
  }
`;

export const resolvers = {
  // Custom resolvers go here
  // Since you are using @neo4j/graphql, basic CRUD operations are auto-generated
};
