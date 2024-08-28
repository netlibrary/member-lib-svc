import {NodesToMove, ParentChilds, SelectedNodes} from "../gen/types.js";
import {CollNodeSvc} from "../services/collNode.js";
import {MemberMetaSvc} from "../services/member_meta.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import {Driver, Transaction} from "neo4j-driver";
import {memberIds} from "../../../global/vars.js";
import {setOGMs} from "../../../global/ogm.js";
import {gql} from "graphql-tag";
import {CollectionSvc} from "../services/collection.js";

export const collNodes_MUT_typeDefs = gql`
    input ParentChilds {
        parentId: ID!
        childIds: [ID!]!
    }

    type Mutation {
        deleteManyNodes(nodes: SelectedNodes!): Int!
        moveManyNodes(nodes: NodesToMove!, destinationId: ID, position: Int): Boolean!
        moveBmsToBLC(nodes: SelectedNodes!): Int!
        moveCollNodes2CollNode(parentChildsList: [ParentChilds!]!, destId: ID!, pos: Int): Int!
    }
`;

export const collNodes_MUT_resolvers = {
    deleteManyNodes: async (_, {nodes}: { nodes: SelectedNodes }, {driver, jwt}) => {
        const tx = await driver.session().beginTransaction();
        try {
            console.log("deleteManyNodes", nodes);
            const deleteCascadeIds = nodes.collectionIds || []
            if (nodes.childs) {
                for (const child of nodes.childs) {
                    if (child.bookmarkIds)
                        deleteCascadeIds.push(...child.bookmarkIds)
                    if (child.folderIds)
                        deleteCascadeIds.push(...child.folderIds)
                }
            }
            const nDeleted = await CollNodeSvc.deleteManyCascade(deleteCascadeIds, tx);
            if (nodes.collectionIds)
                await MemberMetaSvc.delCollPositions(jwt.sub, nodes.collectionIds, tx)
            if (nodes.childs) {
                for (const childsWrapper of nodes.childs) {
                    await ParentMetaSvc.delChPositions(jwt.sub, [...(childsWrapper.bookmarkIds || []), ...(childsWrapper.folderIds || [])], childsWrapper.parentId, tx)
                }
            }
            await tx.commit()

            return nDeleted;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    moveManyNodes: async (_, {nodes, destinationId, position}: {
        nodes: NodesToMove,
        destinationId: string | null,
        position: number | null
    }, {driver, jwt}) => {
        const tx: Transaction = await driver.session().beginTransaction();
        try {
            console.log("moveManyNodes", nodes, destinationId, position);
            if (destinationId == null) {
                await CollNodeSvc.removeHierarch(nodes, tx)
            } else {
                await CollNodeSvc.moveToDest(nodes, destinationId, position, jwt.sub, tx)
            }
            await tx.commit()
            return true
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    moveBmsToBLC: async (_, {nodes}: { nodes: SelectedNodes }, {driver}: { driver: Driver }) => {
        const tx = await driver.session().beginTransaction();
        try {
            // move collection Bms
            const parentIds = nodes.collectionIds || []
            const bmIds: string[] = []
            if (nodes.childs) {
                for (const child of nodes.childs) {
                    if (child.bookmarkIds)
                        bmIds.push(...child.bookmarkIds)
                    if (child.folderIds)
                        parentIds.push(...child.folderIds)
                }
            }
            if (parentIds.length > 0) {
                await CollNodeSvc.moveDeepParentBmsToBLC(parentIds, tx)
            }
            if (bmIds.length > 0) {
                await CollNodeSvc.moveBmsToBLC(bmIds, tx)
            }

            await tx.commit()
            return 1;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    moveCollNodes2CollNode: async (_, {parentChildsList, destId, pos}, {driver, jwt, isTest}) => {
        parentChildsList = parentChildsList as ParentChilds[]
        const tx = await driver.session().beginTransaction();
        try {
            const childIds = parentChildsList.map(pc => pc.childIds).flat()

            for (const parentChilds of parentChildsList) {
                await ParentMetaSvc.delChPositions(jwt.sub, parentChilds.childIds, parentChilds.parentId, tx)
            }

            await CollNodeSvc.moveChilds2Dest(jwt.sub, childIds, destId, tx)

            for (const parentChilds of parentChildsList) {
                await ParentMetaSvc.addChildPositions(jwt.sub, parentChilds.childIds, destId, pos, tx)
            }

            if (isTest) {
                await tx.rollback()
            } else {
                await tx.commit()
            }
            return true;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }

    }
}