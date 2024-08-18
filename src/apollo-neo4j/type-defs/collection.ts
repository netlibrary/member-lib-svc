import {gql} from "graphql-tag";

export const collection_typeDefs = gql`
  type Collection implements Parent
    @node(labels: ["Collection", "Parent", "DeleteCascade", "CollNode", "BmContainer"])
  @authorization(filter: [{ operations: [READ, AGGREGATE] where: { node: { member: { id: "$jwt.sub" } } } }])
  {
    id: ID! @unique
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    name: String
    children: [Child!]! @relationship(type: "CONTAINS", direction: OUT)
    parentMeta: ParentMeta @relationship(type: "HAS", direction: OUT)

    member: Member! @relationship(type: "OWNS", direction: IN)
  }
`;
