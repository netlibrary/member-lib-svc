import { gql } from "graphql-tag";

export const collection_typeDefs = gql`
  type Collection implements Parent
    @node(labels: ["Collection", "Parent", "DeleteCascade", "CollNode"])
  @authorization(filter: [{ operations: [READ, AGGREGATE] where: { node: { member: { id: "$jwt.sub" } } } }])
  {
    id: ID! @id @unique
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    name: String
    children: [Child!]! @relationship(type: "CONTAINS", direction: OUT)
    parentMeta: ParentMeta @relationship(type: "HAS", direction: OUT)

    member: Member! @relationship(type: "OWNS", direction: IN)
  }

  type CollectionDs {
    id: ID!
    name: String!
    bookmarkCount: Int!
    deepness: Int!
  }

  type CollectionDsList {
    collections: [CollectionDs!]
  }
  

  type Mutation {
    createCollection(name: String!, memberId: ID!): ID
    deleteCollection(id: ID!, memberId: ID!): Int!
      deleteManyColls(ids: [ID!]!): Int!
  }
`;
