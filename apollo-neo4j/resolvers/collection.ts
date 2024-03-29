import {ogm} from "../ogm";
import {Driver} from "neo4j-driver";
import {MemberMetaSvc} from "../services/member_meta";
import {NodeSvc} from "../services/node";

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
            const tx = await driver.session().beginTransaction();
            try {
                // Extract the nodesDeleted count from the result
                const nodesDeleted = await NodeSvc.deleteCascade(id, tx);
                await MemberMetaSvc.deleteCollectionPositions(memberId, [id]);

                return nodesDeleted;
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },
        deleteCollections: async (_, {ids, memberId}, {driver}: { driver: Driver }) => {
            const tx = await driver.session().beginTransaction();
            try {
                // Construct and execute the Cypher query for multiple IDs
                const nDeleted = await NodeSvc.deleteManyCascade(ids, tx);
                await MemberMetaSvc.deleteCollectionPositions(memberId, ids);

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
