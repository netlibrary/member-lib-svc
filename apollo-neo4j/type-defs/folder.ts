import { gql } from 'apollo-server-express';

export const folder_typeDefs = gql`
  type Folder implements Container @node(labels: ["Folder", "Container", "DeleteCascade"]) { 
    id: ID! @id @unique
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    name: String
    bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    folders: [Folder!]! @relationship(type: "CONTAINS", direction: OUT)
    containerMeta: ContainerMeta @relationship(type: "HAS", direction: OUT)

    folder: Folder @relationship(type: "CONTAINS", direction: IN)
    collection: Collection @relationship(type: "CONTAINS", direction: IN)
  }

  type FolderResp {
    id: ID!
    name: String!
    bookmarkCount: Int
    folders: [FolderResp!]
    bookmarks: [BookmarkResp!]
    elementPositions: [String!]
  }
`;