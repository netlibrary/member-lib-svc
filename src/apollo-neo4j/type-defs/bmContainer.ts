import { gql } from 'graphql-tag';

export const bmContainer_typeDefs = gql`
    type BmContainer implements Parent @node(labels: ["BmContainer"]) {
        id: ID! @id @unique
        member: Member @relationship(type: "OWNS", direction: IN)
        bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    }
`;