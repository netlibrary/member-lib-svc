import { gql } from "apollo-server-express";

export const collection_typeDefs = gql`
  type Collection implements Container
    @node(labels: ["Collection", "Container", "DeleteCascade"]) {
    id: ID! @id @unique
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    name: String
    bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    folders: [Folder!]! @relationship(type: "CONTAINS", direction: OUT)
    containerMeta: ContainerMeta @relationship(type: "HAS", direction: OUT)

    member: Member @relationship(type: "OWNS", direction: IN)
  }

  type CollectionDS1 {
    id: ID!
    name: String!
    bookmarkCount: Int!
  }

  type CollectionListDS1 {
    collections: [CollectionDS1!]
  }

  type Query {
    collectionList(memberId: String!): CollectionListDS1
      @cypher(
        statement: """
        MATCH (m:Member {id: $memberId})-[:OWNS]->(c:Collection)
        OPTIONAL MATCH (m)-[:HAS]->(mm:MemberMeta)
        WITH c, mm
        MATCH (c)-[:CONTAINS*0..]->(:Folder)-[:CONTAINS*0..]->(b:Bookmark)
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
`;
