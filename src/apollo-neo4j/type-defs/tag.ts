import {gql} from "graphql-tag";


export const tag_typeDefs = gql`
    type Tag @node(labels: ["Tag"]) {
        id: ID! @id @unique
        createdAt: DateTime @timestamp(operations: [CREATE])
        updatedAt: DateTime @timestamp(operations: [UPDATE])
        description: String
        name: String! @unique
        bookmarks: [Bookmark!]! @relationship(type: "HAS", direction: IN)
    }
`;