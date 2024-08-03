import { gql } from 'graphql-tag';

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

  type FolderDl {
    id: ID!
    type: String
    name: String!
    bookmarkCount: Int
    hasUnfetchedChildren: Boolean
    children: [ChildDl!]!
  }

  type Mutation {
    createFolder(name: String!, position: Int!, parentId: ID!): ID
    deleteFolder(id: ID!, parentId: ID!): Int!
  }
`;