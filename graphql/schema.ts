import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Bookmark {
    id: ID! @id @unique
    createdAt: String
    updatedAt: String
    description: String
    title: String
    position: Int
    domainName: String
    urlScheme: String
    linkPath: String
    folder: Folder @relationship(type: "CONTAINS", direction: IN)
    collection: Collection @relationship(type: "CONTAINS", direction: IN)
  }

  interface Container {
    id: ID! @id
    createdAt: String
    updatedAt: String
    name: String
    position: Int
    bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    folders: [Folder!]! @relationship(type: "CONTAINS", direction: OUT)
  }

  type Folder { 
    id: ID! @id @unique
    createdAt: String
    updatedAt: String
    name: String
    position: Int
    bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    folders: [Folder!]! @relationship(type: "CONTAINS", direction: OUT)

    parent: Folder @relationship(type: "CONTAINS", direction: IN)
    collection: Collection @relationship(type: "CONTAINS", direction: IN)
  }

  type Collection implements Container {
    id: ID! @id @unique
    createdAt: String
    updatedAt: String
    name: String
    position: Int
    bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    folders: [Folder!]! @relationship(type: "CONTAINS", direction: OUT)

    member: Member @relationship(type: "OWNED_BY", direction: IN)
  }

  type Member {
    id: ID! @id @unique
    collections: [Collection!]! @relationship(type: "OWNED_BY", direction: OUT)
  }
`;



