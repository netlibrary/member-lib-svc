import {gql} from "graphql-tag";

export const MemberMetaLabels = {
    list: ["MemberMeta", "CollNode"],
    cypherList: () => `${MemberMetaLabels.list.join(':')}`,
    gqlList: () => `[${MemberMetaLabels.list.map(l => `"${l}"`).join(', ')}]`
}

export const memberMeta_typeDefs = gql`
    type MemberMeta @node(labels: ${MemberMetaLabels.gqlList()}) {
        id: ID! @id @unique
        collectionPositions: [String!]!
        member: Member @relationship(type: "HAS", direction: IN)
    }
`;
