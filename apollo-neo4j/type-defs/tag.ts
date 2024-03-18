import {gql} from "apollo-server-express";

export const tag_typeDefs = gql`
    type Tag @node(labels: ["Tag"]) {
        id: ID! @id @unique
        createdAt: DateTime @timestamp(operations: [CREATE])
        updatedAt: DateTime @timestamp(operations: [UPDATE])
        description: String
        name: String! @unique
        bookmarks: [Bookmark!]! @relationship(type: "BELONGS_TO", direction: IN)
    }
`;