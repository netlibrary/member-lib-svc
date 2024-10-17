import {gql} from 'graphql-tag';

export const FolderLabels = {
  list: ["Folder", "Parent", "DeleteCascade", "Child", "CollNode", "BmContainer"],
  cypherList: () => `${FolderLabels.list.join(':')}`,
  gqlList: () => `[${FolderLabels.list.map(l => `"${l}"`).join(', ')}]`
}

export const folder_typeDefs = gql`
  type Folder implements Parent @node(labels: ${FolderLabels.gqlList()}) {
    id: ID! @unique
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    name: String
    children: [Child!]! @relationship(type: "CONTAINS", direction: OUT)
    parentMeta: ParentMeta @relationship(type: "HAS", direction: OUT)

    parent: Parent @relationship(type: "CONTAINS", direction: IN)
    member: Member! @relationship(type: "OWNS", direction: IN)
  }

  type FolderDl {
    id: ID!
    type: String
    name: String!
    bookmarkCount: Int
    hasUnfetchedChildren: Boolean
    children: [ChildDl!]!
  }
`;