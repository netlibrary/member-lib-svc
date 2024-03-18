import { gql } from 'apollo-server-express';

export const bookmark_typeDefs = gql`
    type Bookmark @node(labels: ["Bookmark", "Child"]) {
        id: ID! @id @unique
        createdAt: DateTime @timestamp(operations: [CREATE])
        updatedAt: DateTime @timestamp(operations: [UPDATE])
        description: String
        name: String
        domainName: String
        urlScheme: String
        linkPath: String
        iconUri: String

        parent: Parent @relationship(type: "CONTAINS", direction: IN)
        tags: [Tag!]! @relationship(type: "BELONGS_TO", direction: OUT)
        container: BmsContainer @relationship(type: "CONTAINS", direction: IN)
    }

    type BmsContainer @node(labels: ["BmsContainer"]) {
        id: ID! @id @unique
        member: Member @relationship(type: "OWNS", direction: IN)
        bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    }

    type BookmarkDl {
        id: ID!
        type: String
        name: String!
        domainName: String!
        urlScheme: String!
        linkPath: String!
        iconUri: String
        description: String
    }

    input CreateBookmarkDl {
        parentId: ID
        position: Int
        name: String
        domainName: String!
        urlScheme: String!
        linkPath: String!
        iconUri: String
        description: String
    }

    type Mutation {
        createBookmarkDl(data: CreateBookmarkDl!): ID
        deleteBookmark(id: ID!, parentId: ID!): Int!
    }

    type Query {
        nonHierarchBmCount(memberId: String!): Int!
        @cypher(
            statement: """
            MATCH (m:Member {id: $memberId})-[:OWNS]->(c:BmsContainer)
            OPTIONAL MATCH (c)-[:CONTAINS]->(b:Bookmark)
            RETURN COUNT(b) AS count
            """
            columnName: "count"
        )
    }
`;