import { gql } from "apollo-server-express";

export const collectionTree_typeDefs = gql`
    union Child = Bookmark | Folder
    union Parent = Collection | Folder

    interface Parent {
        id: ID! @id
        createdAt: DateTime @timestamp(operations: [CREATE])
        updatedAt: DateTime @timestamp(operations: [UPDATE])
        name: String
        parentMeta: ParentMeta @relationship(type: "HAS", direction: OUT)
        children: [Child!]! @relationship(type: "CONTAINS", direction: OUT)
    }

    type ParentMeta {
        id: ID! @id @unique
        childPositions: [String!]!
        parent: Parent @relationship(type: "HAS", direction: IN)
    }

    union ChildDl = FolderDl | BookmarkDl
    
    type ParentsChildren {
        id: ID!
        children: [ChildDl!]!
    }

    type Query {
        parentChildren(id: String!, level: Int!): [ChildDl!]!
        nl_parentsChildren(ids: [String!]!, level: Int!): [ParentsChildren!]!
    }
`;
