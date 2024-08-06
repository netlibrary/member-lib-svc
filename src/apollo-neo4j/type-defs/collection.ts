import { gql } from "graphql-tag";

export const collection_typeDefs = gql`
  type Collection implements Parent
    @node(labels: ["Collection", "Parent", "DeleteCascade", "CollNode"]) {
    id: ID! @id @unique
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    name: String
    children: [Child!]! @relationship(type: "CONTAINS", direction: OUT)
    parentMeta: ParentMeta @relationship(type: "HAS", direction: OUT)

    member: Member @relationship(type: "OWNS", direction: IN)
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

  type Query {
    collectionList(memberId: String!): CollectionDsList
      @cypher(
        statement: """
        MATCH (m:Member {id: $memberId})-[:OWNS]->(c:Collection)
        OPTIONAL MATCH (m)-[:HAS]->(mm:MemberMeta)
        OPTIONAL MATCH path=(c)-[:CONTAINS*0..]->(f:Folder)
        WITH c, mm, length(path) AS depth
        WITH c, mm, MAX(depth) AS maxDepth
        OPTIONAL MATCH (c)-[:CONTAINS*0..]->(b:Bookmark)
        WITH c AS collection, COUNT(DISTINCT b) AS bookmarkCount, mm, maxDepth + 1 AS deepness
        WITH mm, COLLECT({id: collection.id, name: collection.name, bookmarkCount: bookmarkCount, deepness: deepness}) AS collections
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
