import { gql } from "apollo-server";

export const general_typeDefs = gql`
  type Mutation {
    deleteCascade(id: ID!): Int
        @cypher(
            statement: """
            MATCH (n:DeleteCascade { id: $id })
            OPTIONAL MATCH (n)-[r*0..]->(sub)
            DETACH DELETE n, sub
            RETURN COUNT(sub) AS nodesDeleted
            """
            columnName: "nodesDeleted"
        )
  }
`;
