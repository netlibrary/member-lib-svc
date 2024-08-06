import { gql } from "graphql-tag";

export const collNodes_typeDefs = gql`
    union Child = Bookmark | Folder
    union Parent = Collection | Folder

    interface Parent {
        id: ID! @id
    }

    type ParentMeta @node(labels: ["ParentMeta", "CollNode"]) {
        id: ID! @id @unique
        childPositions: [String!]!
        parent: Parent @relationship(type: "HAS", direction: IN)
    }

    union ChildDl = FolderDl | BookmarkDl
    
    type ParentsChildren {
        id: ID!
        children: [ChildDl!]!
    }
    
    type ParentDs {
        id: ID!
        name: String!
        bmCount: Int!
        parentId: ID
    }

    input SelectedChilds {
        parentId: ID!
        bookmarkIds: [ID!]
        folderIds: [ID!]
    }

    input ChildsToMove {
        parentId: ID!
        childIds: [ID!]!
    }

    input NodesToMove {
        collectionIds: [ID!]!
        childs: [ChildsToMove!]!
    }

    input SelectedNodes {
        collectionIds: [ID!]
        childs: [SelectedChilds!]
    }

    type CollBmCount {
        id: ID!
        bmCount: Int!
    }

    type Query {
        parentChildren(id: String!, level: Int!): [ChildDl!]!
        nl_parentsChildren(ids: [String!]!, level: Int!): [ParentsChildren!]!
        parentsByFilter(name: String!, limit: Int!, offset: Int!): [ParentDs!]
        collectionsByBmIdsXBmCounts(ids: [String!]!): [CollBmCount!]
    }

    type Mutation {
        deleteManyNodes(nodes: SelectedNodes!): Int!
        moveManyNodes(nodes: NodesToMove!, destinationId: ID, position: Int): Boolean!
    }
`;
