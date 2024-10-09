import {gql} from "graphql-tag";
import {Coll_SvcDb} from "../services_db/coll.js";

export const collection_QUERY_typeDefs = gql`
    type CollInfo {
        id: ID!
        bmCount: Int!
        deepness: Int!
    }

    type CollectionDs {
        id: ID!
        name: String!
        bookmarkCount: Int!
        deepness: Int!
    }

    type CollectionDsList {
        collections: [CollectionDs!]
    }

    type Query {
        collectionList: CollectionDsList
        @cypher(
            statement: """
            MATCH (m:Member {id: $jwt.sub})-[:OWNS]->(c:Collection)
            OPTIONAL MATCH (m)-[:HAS]->(mm:MemberMeta)
            OPTIONAL MATCH path=(c)-[:CONTAINS*0..]->(f:Folder)
            WITH c, mm, length(path) AS depth
            WITH c, mm, MAX(depth) AS maxDepth
            OPTIONAL MATCH (c)-[:CONTAINS*0..]->(b:Bookmark)
            WITH c AS collection, COUNT(DISTINCT b) AS bookmarkCount, mm, maxDepth + 1 AS deepness
            WITH mm, COLLECT({id: collection.id, name: collection.name, bookmarkCount: bookmarkCount, deepness: deepness}) AS collections
            UNWIND mm.collectionPositions AS pos
            WITH pos, [collection IN collections WHERE collection.id = pos][0] AS sortedCollection
            WITH COLLECT(sortedCollection) AS sortedCollections
            RETURN {
            collections: sortedCollections
            }  as r
            """
            columnName: "r"
        )
        nl_collInfosByids(ids: [String!]!): [CollInfo!]
    }
`;

export const collection_QUERY_Resolvers = {
    nl_collInfosByids: async (_, {ids}, {driver, jwt}) => {
        const tx = await driver.session().beginTransaction();
        try {
            return await Coll_SvcDb.getCollInfosByIds(jwt.sub, ids, tx);
        } finally {
            await tx.close();
        }
    },

};
