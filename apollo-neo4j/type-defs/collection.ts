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

  type CollectionListResp {
    id: ID!
    name: String
    bookmarkCount: Int
  }

  type Query {
    collectionList(memberId: String!): [CollectionListResp]
      @cypher(
        statement: """
        MATCH (m:Member {id: $memberId})-[:OWNS]->(c:Collection)
        CALL {
          WITH c
          MATCH path = (c)-[:CONTAINS*0..]->(:Folder)-[:CONTAINS*0..]->(b:Bookmark)
          RETURN COUNT(DISTINCT b) AS bookmarkCount
        }
        RETURN {id: c.id, name: c.name, bookmarkCount: bookmarkCount} as r
        """,
        columnName: "r"
      ),
  }
`;
