import { gql } from "apollo-server";

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
`;
