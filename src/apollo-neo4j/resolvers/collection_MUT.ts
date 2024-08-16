import {MemberMetaSvc} from "../services/member_meta.js";
import {CollNodeSvc} from "../services/collNode.js";
import {gql} from "graphql-tag";
import {NodeSvc} from "../services/node.js";
import {BmLooseSvc} from "../services/bmLoose.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import {CollectionSvc} from "../services/collection.js";

export const collection_MUT_typeDefs = gql`
    type Mutation {
        createCollection(name: String!, memberId: ID!): ID
        deleteCollection(id: ID!): Int!
        deleteManyColls(ids: [ID!]!): Int!
        moveColls2CollNode(collIds: [ID!]!, destId: ID!, pos: Int): Int!
    }
`;

export const collection_MUT_Resolvers = {
    Mutation: {
        createCollection: async (t, {name}, {ogm, jwt}) => {
            try {
                const collection = await ogm.model("Collection").create({
                    input: {
                        id: NodeSvc.genCollId(),
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
        deleteCollection: async (_, {id}, {driver, jwt}) => {
            const tx = await driver.session().beginTransaction();
            try {
                // Extract the nodesDeleted count from the result
                const nodesDeleted = await CollNodeSvc.deleteCascade(id, tx);
                await MemberMetaSvc.delCollPositions(jwt.sub, [id], tx);

                return nodesDeleted;
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },
        deleteManyColls: async (_, {ids}, {driver, jwt}) => {
            const tx = await driver.session().beginTransaction();
            try {
                // Construct and execute the Cypher query for multiple IDs
                const nDeleted = await CollNodeSvc.deleteManyCascade(ids, tx);
                await MemberMetaSvc.delCollPositions(jwt.sub, ids, tx);

                return nDeleted;
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },
        moveColls2CollNode: async (_, {collIds, destId, pos}, {driver, jwt}) => {
            const tx = await driver.session().beginTransaction();
            try {
                const folderIds = await CollectionSvc.moveColls2CollNode(jwt.sub, collIds, destId, tx)
                await MemberMetaSvc.delCollPositions(jwt.sub, collIds, tx)
                await ParentMetaSvc.addChildPositions(jwt.sub, folderIds, destId, pos, tx)
                await tx.commit()
                return true;
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }

        }
    }
};
