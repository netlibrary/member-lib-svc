import { gql } from 'apollo-server-express';

export const folder_typeDefs = gql`
  type Folder implements Parent @node(labels: ["Folder", "Parent", "DeleteCascade", "Child"]) { 
    id: ID! @id @unique
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    name: String
    children: [Child!]! @relationship(type: "CONTAINS", direction: OUT)
    parentMeta: ParentMeta @relationship(type: "HAS", direction: OUT)

    parent: Parent @relationship(type: "CONTAINS", direction: IN)
  }

  type FolderDs1 {
    id: ID!
    type: String
    name: String!
    bookmarkCount: Int
    children: [ChildrenDd1!]
  }
`;