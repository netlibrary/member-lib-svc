import { gql } from "apollo-server-express";

export const collection_typeDefs = gql`
  type Collection implements Parent
    @node(labels: ["Collection", "Parent", "DeleteCascade"]) {
    id: ID! @id @unique
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    name: String
    children: [Child!]! @relationship(type: "CONTAINS", direction: OUT)
    parentMeta: ParentMeta @relationship(type: "HAS", direction: OUT)

    member: Member @relationship(type: "OWNS", direction: IN)
  }

  type CollectionDs1 {
    id: ID!
    name: String!
    bookmarkCount: Int!
  }

  type CollectionListDs1 {
    collections: [CollectionDs1!]
  }

  type Query {
    collectionList(memberId: String!): CollectionListDs1
      @cypher(
        statement: """
        MATCH (m:Member {id: $memberId})-[:OWNS]->(c:Collection)
        OPTIONAL MATCH (m)-[:HAS]->(mm:MemberMeta)
        WITH c, mm
        OPTIONAL MATCH (c)-[:CONTAINS*0..]->(:Folder)-[:CONTAINS*0..]->(b:Bookmark)
        WITH c AS collection, COUNT(DISTINCT b) AS bookmarkCount, mm
        WITH mm, COLLECT({id: collection.id, name: collection.name, bookmarkCount: bookmarkCount}) AS collections
        UNWIND mm.collectionPositions AS pos
        WITH pos, [collection IN collections WHERE collection.id = pos][0] AS sortedCollection
        WITH COLLECT(sortedCollection) AS sortedCollections
        RETURN {
          collections: sortedCollections
        }  as r
        """
        columnName: "r"
      )
  }

  type Mutation {
    createCollection(name: String!, memberId: ID!): ID
    deleteCollection(id: ID!, memberId: ID!): Int!
  }
`;
