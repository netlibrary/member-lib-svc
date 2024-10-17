import {ParentChilds} from "../../gen/types.js";
import {CollNodeSvc} from "../services/collNode.js";
import {MemberMetaSvc} from "../services/member_meta.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import {Transaction} from "neo4j-driver";
import {gql} from "graphql-tag";
import {NodeSvc} from "../services/node.js";

export const collNodes_MUT_typeDefs = gql`
    input ParentChilds {
        parentId: ID!
        childIds: [ID!]!
    }

    input Nodes {
        collectionIds: [ID!]!
        childs: [ParentChilds!]!
    }
    
    type Mutation {
        deleteManyNodes(nodes: Nodes!): Int!
        moveManyNodes(nodes: Nodes!, destinationId: ID, position: Int): Boolean!
        moveBmsToBLC(nodes: [String!]!): Int!
        resolveParents(parentIds: [String!]!): Int!
        moveCollNodes2CollNode(parentChildsList: [ParentChilds!]!, destId: ID!, pos: Int): Int!
    }
`;

export const collNodes_MUT_resolvers = {
    deleteManyNodes: async (_, {nodes}: { nodes: any }, {driver, jwt}) => {
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
        nodes: any,
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
    moveBmsToBLC: async (_, {nodes}: { nodes: string[] }, {driver, jwt, isTest}) => {
        const tx = await driver.session().beginTransaction();
        try {
            // extract parent ids from nodes (start with f: or c:)
            const parentIds = nodes.filter(n => n.startsWith("f:") || n.startsWith("c:"))
            const bmIds = nodes.filter(n => n.startsWith("b:"))

            if (parentIds.length > 0) {
                await CollNodeSvc.moveDeepParentBmsToBLC(jwt.sub, parentIds, tx)
            }
            if (bmIds.length > 0) {
                await CollNodeSvc.moveBmsToBLC(jwt.sub, bmIds, tx)
            }

            if (isTest) {
                await tx.rollback()
            } else {
                await tx.commit()
            }
            return 1;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    resolveParents: async (_, {parentIds}: { parentIds: string[] }, {driver, jwt, isTest}) => {
        const tx = await driver.session().beginTransaction();
        try {
            if (parentIds.length > 0) {
                await CollNodeSvc.moveDeepParentBmsToBLC(jwt.sub, parentIds, tx)
                await NodeSvc.deleteManyCascade(parentIds, tx)
            }

            if (isTest) {
                await tx.rollback()
            } else {
                await tx.commit()
            }
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