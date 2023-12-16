import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Bookmark {
    id: ID! @id @unique
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [UPDATE])
    description: String
    title: String
    domainName: String
    urlScheme: String
    linkPath: String
    folder: Folder @relationship(type: "CONTAINS", direction: IN)
    collection: Collection @relationship(type: "CONTAINS", direction: IN)
  }

  interface Container {
    id: ID! @id
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [UPDATE])
    name: String
    containerMeta: ContainerMeta @relationship(type: "HAS", direction: OUT)
    bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    folders: [Folder!]! @relationship(type: "CONTAINS", direction: OUT)
  }

  type ContainerMeta {
    id: ID! @id @unique
    ElementPositions: [String!]!
    container: Container @relationship(type: "HAS", direction: IN)
  }

  type Folder implements Container { 
    id: ID! @id @unique
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [UPDATE])
    name: String
    bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    folders: [Folder!]! @relationship(type: "CONTAINS", direction: OUT)
    containerMeta: ContainerMeta @relationship(type: "HAS", direction: OUT)

    parent: Folder @relationship(type: "CONTAINS", direction: IN)
    collection: Collection @relationship(type: "CONTAINS", direction: IN)
  }

  type Collection implements Container {
    id: ID! @id @unique
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [UPDATE])
    name: String
    bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    folders: [Folder!]! @relationship(type: "CONTAINS", direction: OUT)
    containerMeta: ContainerMeta @relationship(type: "HAS", direction: OUT)

    member: Member @relationship(type: "OWNS", direction: IN)
  }

  type Member {
    id: ID! @id @unique
    collections: [Collection!]! @relationship(type: "OWNS", direction: OUT)
    memberMeta: MemberMeta @relationship(type: "HAS", direction: OUT)
  }

  type MemberMeta {
    id: ID! @id @unique
    CollectionPositions: [String!]!
    member: Member @relationship(type: "HAS", direction: IN)
  }
`;
