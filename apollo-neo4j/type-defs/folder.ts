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

  type FolderDd1 {
    id: ID!
    type: String
    name: String!
    bookmarkCount: Int
    children: [ChildDlGeneral!]!
  }

  type Mutation {
#    createFolder(name: String!, memberId: ID!): ID
    deleteFolder(id: ID!, parentId: ID!): Int!
  }
`;