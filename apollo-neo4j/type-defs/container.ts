import { gql } from "apollo-server-express";

export const container_typeDefs = gql`
  interface Container {
    id: ID! @id
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    name: String
    containerMeta: ContainerMeta @relationship(type: "HAS", direction: OUT)
    bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    folders: [Folder!]! @relationship(type: "CONTAINS", direction: OUT)
  }

  type ContainerMeta {
    id: ID! @id @unique
    elementPositions: [String!]!
    folder: Folder @relationship(type: "HAS", direction: IN)
    collection: Collection @relationship(type: "HAS", direction: IN)
  }

  union ChildrenResp = FolderResp | BookmarkResp

  type ContainerContentResp {
    children: [ChildrenResp!]!
  }

  type Query {
    containerContent(id: String!, level: Int!): ContainerContentResp
  }
`;
