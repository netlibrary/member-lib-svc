import gql from 'graphql-tag';

export const tag_typeDefs = gql`
    type Tag @node(labels: ["Tag"]) {
        id: ID! @id @unique
        createdAt: DateTime @timestamp(operations: [CREATE])
        updatedAt: DateTime @timestamp(operations: [UPDATE])
        description: String
        name: String! @unique
        bookmarks: [Bookmark!]! @relationship(type: "HAS", direction: IN)
    }

    type TagDs {
        id: ID!
        name: String!
    }

    type TagDl {
        id: ID!
        name: String!
        count: Int!
    }

    type Query {
        tagList(memberId: String!): [TagDl!]
        @cypher(
            statement: """
            MATCH (t:Tag)<-[:HAS|OWNS|CONTAINS*]-(m:Member)
            WHERE m.id = $memberId
            with t, COUNT(t) as tagCount
            RETURN {id: t.id, name:t.name, count:tagCount} AS r
            """
            columnName: "r"
        )
    }
`;