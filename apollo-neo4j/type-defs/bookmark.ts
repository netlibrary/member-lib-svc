import { gql } from 'apollo-server-express';

export const bookmark_typeDefs = gql`
  type Bookmark {
    id: ID! @id @unique
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    description: String
    title: String
    domainName: String
    urlScheme: String
    linkPath: String

    folder: Folder @relationship(type: "CONTAINS", direction: IN)
    collection: Collection @relationship(type: "CONTAINS", direction: IN)
  }
`;