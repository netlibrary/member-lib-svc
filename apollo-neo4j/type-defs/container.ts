import { gql } from 'apollo-server';

export const container_typeDefs = gql`
  interface Container {
    id: ID! @id
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    name: String
    containerMeta: ContainerMeta @relationship(type: "HAS", direction: OUT)
    bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    folders: [Folder!]! @relationship(type: "CONTAINS", direction: OUT)
  }

  type Mutation {
    deleteContainer(id: ID!): Boolean
      @cypher(
        statement: """
        CREATE (a:Actor {name: $name})
        RETURN a
        """
        columnName: "a"
      )
  }

  type ContainerMeta {
    id: ID! @id @unique
    elementPositions: [String!]!
    folder: Folder @relationship(type: "HAS", direction: IN)
    collection: Collection @relationship(type: "HAS", direction: IN)
  }
`;