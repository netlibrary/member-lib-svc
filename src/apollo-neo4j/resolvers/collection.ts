import {MemberMetaSvc} from "../services/member_meta.js";
import {CollNodeSvc} from "../services/collNode.js";
import {gql} from "graphql-tag";

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

export const collectionResolvers = {
    Mutation: {
        createCollection: async (t, {name}, {ogm, jwt}) => {
            try {
                const collection = await ogm.model("Collection").create({
                    input: {
                        name: name,
                        parentMeta: {
                            create: {
                                node: {
                                    childPositions: []
                                }
                            }
                        },
                        member: {
                            connect: {where: {node: {id: jwt.sub}}},
                        },
                    },
                });
                const collectionId = collection.collections[0].id
                console.log(
                    `Collection created with ID: ${collectionId}`
                );
                const MemberMeta = ogm.model("MemberMeta");
                await MemberMeta.update({
                    update: {
                        collectionPositions_PUSH: collectionId,
                    },
                    where: {
                        member: {
                            id: jwt.sub,
                        },
                    },
                });
                return collectionId;
            } catch (error) {
                throw error;
            }
        },
        deleteCollection: async (_, {id, memberId}, {driver}) => {
            const tx = await driver.session().beginTransaction();
            try {
                // Extract the nodesDeleted count from the result
                const nodesDeleted = await CollNodeSvc.deleteCascade(id, tx);
                await MemberMetaSvc.deleteCollectionPositions(memberId, [id]);

                return nodesDeleted;
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },
        deleteManyColls: async (_, {ids}, {driver}) => {
            const tx = await driver.session().beginTransaction();
            try {
                // Construct and execute the Cypher query for multiple IDs
                const nDeleted = await CollNodeSvc.deleteManyCascade([], tx);
                await MemberMetaSvc.deleteCollectionPositions('memberId', []);

                return nDeleted;
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },
    }
};
