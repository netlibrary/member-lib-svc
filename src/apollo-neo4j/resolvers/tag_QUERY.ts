import {gql} from "graphql-tag";

export const tag_QUERY_typeDefs = gql`
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
        tagList: [TagDl!]
        @cypher(
            statement: """
            MATCH (m:Member {id: $jwt.sub})-[:HAS|OWNS|CONTAINS*]->(t:Tag)
            with t, COUNT(t) as tagCount
            RETURN {id: t.id, name:t.name, count:tagCount} AS r
            """
            columnName: "r"
        )
    }
`;