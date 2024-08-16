import {MemberMetaSvc} from "../services/member_meta.js";
import {CollNodeSvc} from "../services/collNode.js";
import {gql} from "graphql-tag";
import {NodeSvc} from "../services/node.js";

export const collection_QUERY_typeDefs = gql`
    type Query {
        collectionList(memberId: String!): CollectionDsList
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
    }
`;
