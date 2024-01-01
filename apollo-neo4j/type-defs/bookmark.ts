import { gql } from 'apollo-server-express';

export const bookmark_typeDefs = gql`
  type Bookmark @node(labels: ["Bookmark", "Child"]) {
    id: ID! @id @unique
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    description: String
    title: String
    domainName: String
    urlScheme: String
    linkPath: String
    iconUri: String

    folder: Folder @relationship(type: "CONTAINS", direction: IN)
    collection: Collection @relationship(type: "CONTAINS", direction: IN)
  }

  type BookmarkResp {
    id: ID!
    type: String
    title: String!
    domainName: String!
    urlScheme: String!
    linkPath: String!
    iconUri: String
    description: String
  }
`;