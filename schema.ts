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

  type Container {
    id: ID!
    createdAt: String
    updatedAt: String
    name: String
    position: Int
    bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    folders: [Container!]! @relationship(type: "CONTAINS", direction: OUT)
  }

  type Member {
    id: ID!
    collections: [Container!]! @relationship(type: "OWNED_BY", direction: OUT)
  }
`;

export const resolvers = {
  // Custom resolvers go here
  // Since you are using @neo4j/graphql, basic CRUD operations are auto-generated
};
