import { gql } from 'apollo-server';

export const folder_typeDefs = gql`
  type Folder implements Container { 
    id: ID! @id @unique
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    name: String
    bookmarks: [Bookmark!]! @relationship(type: "CONTAINS", direction: OUT)
    folders: [Folder!]! @relationship(type: "CONTAINS", direction: OUT)
    containerMeta: ContainerMeta @relationship(type: "HAS", direction: OUT)

    folder: Folder @relationship(type: "CONTAINS", direction: IN)
    collection: Collection @relationship(type: "CONTAINS", direction: IN)
  }
`;