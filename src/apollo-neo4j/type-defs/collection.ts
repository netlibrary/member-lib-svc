import {gql} from "graphql-tag";

export const CollectionLabels = {
  list: ["Collection", "Parent", "DeleteCascade", "CollNode", "BmContainer"],
  cypherList: () => `${CollectionLabels.list.join(':')}`,
  gqlList: () => `[${CollectionLabels.list.map(l => `"${l}"`).join(', ')}]`
}

export const collection_typeDefs = gql`
  type Collection implements Parent
    @node(labels: ${CollectionLabels.gqlList()})
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
