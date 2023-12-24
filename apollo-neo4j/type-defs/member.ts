import { gql } from 'apollo-server';

export const member_typeDefs = gql`
  type Member @node(labels: ["Member", "DeleteCascade"]) {
    id: ID! @id @unique
    collections: [Collection!]! @relationship(type: "OWNS", direction: OUT)
    memberMeta: MemberMeta @relationship(type: "HAS", direction: OUT)
  }

  type MemberMeta {
    id: ID! @id @unique
    collectionPositions: [String!]!
    member: Member @relationship(type: "HAS", direction: IN)
  }
`;