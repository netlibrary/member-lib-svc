import {gql} from "graphql-tag";


export const parentMeta_typeDefs = gql`
    type ParentMeta @node(labels: ["ParentMeta", "CollNode"]) {
        id: ID! @id @unique
        childPositions: [String!]!
        parent: Parent @relationship(type: "HAS", direction: IN)
    }
`;
