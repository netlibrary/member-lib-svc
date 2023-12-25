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
    deleteListCascade(ids: [ID!]!): Int
      @cypher(
        statement: """
        MATCH (n:DeleteCascade)
        WHERE n.id IN $ids
        OPTIONAL MATCH (n)-[r*0..]->(sub)
        WITH n, COLLECT(sub) AS subNodes
        DETACH DELETE n
        WITH subNodes
        UNWIND subNodes AS subNode
        DETACH DELETE subNode
        RETURN COUNT(DISTINCT subNode) AS nodesDeleted
        """
        columnName: "nodesDeleted"
      )
  }
`;
