import {NodesToMove, ParentsChildren, SelectedNodes} from "../gen/types.js";
import {CollNodeSvc} from "../services/collNode.js";
import {MemberMetaSvc} from "../services/member_meta.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import neo4j, {Driver, Transaction} from "neo4j-driver";
import {bm_CypherSel} from "./bm.js";
import {memberIds} from "../../../global/vars.js";
import {setOGMs} from "../../../global/ogm.js";

export const collNodes_MUT_resolvers = {
    deleteManyNodes: async (_, {nodes}: { nodes: SelectedNodes }, {driver, ogm}) => {
        const tx = await driver.session().beginTransaction();
        setOGMs(ogm)
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
                await MemberMetaSvc.deleteCollectionPositions(memberIds[0], nodes.collectionIds)
            if (nodes.childs) {
                for (const childsWrapper of nodes.childs) {
                    await ParentMetaSvc.deleteChildPositions([...(childsWrapper.bookmarkIds || []), ...(childsWrapper.folderIds || [])], childsWrapper.parentId)
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
    }, {driver}) => {
        const tx: Transaction = await driver.session().beginTransaction();
        try {
            console.log("moveManyNodes", nodes, destinationId, position);
            if (destinationId == null) {
                await CollNodeSvc.removeHierarch(nodes, tx)
            } else {
                await CollNodeSvc.moveToDest(nodes, destinationId, position, memberIds[0], tx)
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
}