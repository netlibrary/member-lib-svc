import {ogm} from "../ogm.js";
import {Driver} from "neo4j-driver";
import {MemberMetaSvc} from "../services/member_meta.js";
import {CollNodeSvc} from "../services/collNode.js";
import {getOgm_Collection, setOGMs} from "../../../global/ogm.js";
import {Context} from "../context.js";
import {IResolvers} from "@graphql-tools/utils";
import {Resolvers} from "../gen/types.js";


export const collectionResolvers = {
    Mutation: {
        createCollection: async (t, {name}, ctx) => {
            setOGMs(ogm)
            try {
                const collection = await getOgm_Collection().create({
                    input: {
                        name: name,
                        member: {
                            connect: {where: {node: {id: 'memberId'}}},
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
                            id: 'memberId',
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
