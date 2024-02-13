import {ogm} from "../ogm";

export const ogm_Collection = ogm.model("Collection");

export const collectionResolvers = {
    Mutation: {
        createCollection: async (_, {name, memberId}, {driver}) => {
            try {
                const collection = await ogm_Collection.create({
                    input: {
                        name: name,
                        member: {
                            connect: {where: {node: {id: memberId}}},
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
                            id: memberId,
                        },
                    },
                });
                return collectionId;
            } catch (error) {
                throw error;
            }
        },
        deleteCollection: async (_, {id, memberId}, {driver}) => {
            const session = driver.session();
            try {
                // Construct and execute the Cypher query
                const result = await session.run(`
                    MATCH (n:DeleteCascade { id: $id })
                    OPTIONAL MATCH (n)-[r*0..]->(sub)
                    DETACH DELETE n, sub
                    RETURN COUNT(sub) AS nodesDeleted
                `, {id});

                // Extract the nodesDeleted count from the result
                const nodesDeleted = result.records[0].get('nodesDeleted').toNumber();

                // Return the count of nodes deleted or any other relevant information
                const MemberMeta = ogm.model("MemberMeta");
                const memberMeta = await MemberMeta.find({
                    where: {
                        member: {
                            id: memberId
                        }
                    }
                });
                // If memberMeta is found, update the collection positions
                if (memberMeta && memberMeta.length > 0) {
                    const collectionPositions = memberMeta[0].collectionPositions.filter(collection => collection !== id);
                    await MemberMeta.update({
                        where: {id: memberMeta[0].id},
                        update: {collectionPositions: collectionPositions},
                    });
                } else {
                    // Handle case where MemberMeta object is not found
                    throw new Error('MemberMeta not found for memberId: ' + memberId);
                }

                return nodesDeleted;
            } catch (error) {
                throw error;
            } finally {
                await session.close();
            }
        },
        // deleteCollection: async (_, { id }, { driver }) => {
        //   const session = driver.session();
        //   try {
        //     await session.run(
        //       `MATCH (n{ id: $id })
        //                 OPTIONAL MATCH (n)-[r*]->(m)
        //                 DETACH DELETE n, r, m`,
        //       { id }
        //     );
        //     return true;
        //   } catch (error) {
        //     throw error;
        //   } finally {
        //     await session.close();
        //   }
        // },
    },
};
