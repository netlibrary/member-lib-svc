import { gql } from 'graphql-tag';

export const bmLooseContainer_typeDefs = gql`
    type BmLooseContainer implements Parent @node(labels: ["BmLooseContainer"]) {
        id: ID! @id @unique
        member: Member @relationship(type: "OWNS", direction: IN)
        bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    }

    type Mutation {
        moveCollBmsInContainer(nodes: SelectedNodes!): Int!
    }
`;