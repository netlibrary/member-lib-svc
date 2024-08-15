import {gql} from 'graphql-tag';

export const member_typeDefs = gql`
  type Member 
  @node(labels: ["Member", "DeleteCascade"]) 
  @authentication(operations: [UPDATE, DELETE]) 
  {
    id: ID! @id @unique
    memberName: String! @unique
      passwordHash: String!
    roles: [String!]!
    
    collections: [Collection!]! @relationship(type: "OWNS", direction: OUT)
    folders: [Folder!]! @relationship(type: "OWNS", direction: OUT)
    bookmarks: [Bookmark!]! @relationship(type: "OWNS", direction: OUT)
    bmsContainer: BmLooseContainer @relationship(type: "OWNS", direction: OUT)
    bmFilters: [BookmarkFilter!]! @relationship(type: "OWNS", direction: OUT)
    
    memberMeta: MemberMeta @relationship(type: "HAS", direction: OUT)
  }

  type MemberMeta {
    id: ID! @id @unique
    collectionPositions: [String!]!
    member: Member @relationship(type: "HAS", direction: IN)
  }
`;