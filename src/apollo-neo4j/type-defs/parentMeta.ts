import {gql} from "graphql-tag";

export const ParentMetaLabels = {
    list: ["ParentMeta", "CollNode"],
    cypherList: () => `${ParentMetaLabels.list.join(':')}`,
    gqlList: () => `[${ParentMetaLabels.list.map(l => `"${l}"`).join(', ')}]`
}

export const parentMeta_typeDefs = gql`
    type ParentMeta @node(labels: ${ParentMetaLabels.gqlList()}) {
        id: ID! @id @unique
        childPositions: [String!]!
        parent: Parent @relationship(type: "HAS", direction: IN)
    }
`;
