import {gql} from 'graphql-tag';

export const BookmarkLabels = {
    list: ["Bookmark", "Child", "CollNode"],
    cypherList: () => `${BookmarkLabels.list.join(':')}`,
    gqlList: () => `[${BookmarkLabels.list.map(l => `"${l}"`).join(', ')}]`
}

export const bookmark_typeDefs = gql`
    type Bookmark 
    @node(labels: ${BookmarkLabels.gqlList()}) 
    {
        id: ID! @unique
        createdAt: DateTime @timestamp(operations: [CREATE])
        updatedAt: DateTime @timestamp(operations: [UPDATE])
        description: String
        name: String
        domainName: String
        urlScheme: String
        linkPath: String
        iconUri: String

        parent: Parent @relationship(type: "CONTAINS", direction: IN)
        tags: [Tag!]! @relationship(type: "HAS", direction: OUT)
        member: Member! @relationship(type: "OWNS", direction: IN)
    }

    type BookmarkFilter @node(labels: ["BookmarkFilter"]) {
        id: ID! @id @unique
        createdAt: DateTime @timestamp(operations: [CREATE])
        updatedAt: DateTime @timestamp(operations: [UPDATE])
        description: String
        name: String
        
        bmTxt: String
        bmParentsTxt: String
        bmUrl: String
        bmTags: [String!]!
        bmLoose: Boolean
        
        sortBy: String
        sortDir: String
        
        member: Member @relationship(type: "OWNS", direction: IN)
    }

    input BookmarkFilter_In {
        id: ID

        bmTxt: String
        bmParents: [ID!]
        bmUrl: String
        bmTags: [ID!]
        bmLoose: Boolean
        matchAll: Boolean

        sortBy: String
        sortDir: String
    }
    
    type BookmarkDl {
        id: ID!
        name: String!
        domainName: String!
        urlScheme: String!
        linkPath: String!
        iconUri: String
        description: String
        tags: [TagDs!]
    }

    type BookmarkDl2 {
        id: ID!
        parentId: ID
        collectionId: ID
        name: String!
        domainName: String!
        urlScheme: String!
        linkPath: String!
        iconUri: String
        description: String
        tags: [TagDs!]
    }







    type BmsPaged {
        bookmarks: [BookmarkDl2!]!
        totalCount: Int!
    }

    type Query {
        looseBmCount(memberId: String!): Int!
        @cypher(
            statement: """
            MATCH (m:Member {id: $memberId})-[:OWNS]->(c:BmLooseContainer)
            OPTIONAL MATCH (c)-[:CONTAINS]->(b:Bookmark)
            RETURN COUNT(b) AS count
            """
            columnName: "count"
        )
        bmsByFilter(filter: BookmarkFilter_In!, limit: Int!, offset: Int!): BmsPaged!
    }
`;