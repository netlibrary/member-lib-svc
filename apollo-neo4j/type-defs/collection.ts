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

  type CollectionResp {
        id: ID!
        name: String!
        bookmarkCount: Int!
      }

  type CollectionListResp {
      collections: [CollectionResp],
      collectionPositions: [String]
    }

  type Query {
    collectionList(memberId: String!): CollectionListResp
      @cypher(
        statement: """
        MATCH (m:Member {id: $memberId})-[:OWNS]->(c:Collection)
      OPTIONAL MATCH (m)-[:HAS]->(mm:MemberMeta)
      WITH c, mm
      CALL {
        WITH c
        MATCH (c)-[:CONTAINS*0..]->(:Folder)-[:CONTAINS*0..]->(b:Bookmark)
        RETURN c AS collection, COUNT(DISTINCT b) AS bookmarkCount
      }
      WITH mm, COLLECT({id: collection.id, name: collection.name, bookmarkCount: bookmarkCount}) AS collections
      RETURN {
        collections: collections,
        collectionPositions: mm.collectionPositions
      } as r
      """,
        columnName: "r"
      ),
  }
  `;
