import {Session, Transaction} from "neo4j-driver";
import {ChildsToMove, NodesToMove} from "../gen/types.js";
import {MemberMetaSvc} from "./member_meta.js";
import {ParentMetaSvc} from "./parent_meta.js";
import {CollNodeSvcDb} from "../services_db/collNode.js";

const deleteManyCascade = async (ids: string[], tx: Transaction): Promise<number> => {
    const result = await tx.run(`
            UNWIND $ids AS id
            MATCH (n:CollNode { id: id })
            OPTIONAL MATCH (n)-[r*1..]->(sub:CollNode)
            DETACH DELETE n, sub
            RETURN COUNT(sub) + COUNT(n) AS nodesDeleted
        `, {ids}); // Note that we're now passing an array of ids

    // Since we're deleting multiple nodes, aggregate the total count of nodes deleted
    return result.records.reduce((acc, record) => acc + record.get('nodesDeleted').toNumber(), 0);
}

const deleteCascade = async (id: string, tx: Transaction): Promise<number> => {
    const result = await tx.run(`
            MATCH (n:DeleteCascade { id: id })
            OPTIONAL MATCH (n)-[r*0..]->(sub:CollNode)
            DETACH DELETE n, sub
            RETURN COUNT(sub) + COUNT(n) AS nodesDeleted
        `, {id}); // Note that we're now passing an array of ids

    // Since we're deleting multiple nodes, aggregate the total count of nodes deleted
    return result.records[0].get('nodesDeleted').toNumber();
}

const removeHierarch = async (nodes: NodesToMove, tx: Transaction): Promise<number> => {
    let deleted = 0
    if (nodes.collectionIds.length > 0) {
        deleted = await removeHierarchFromCollections(nodes.collectionIds, tx)
    }
    for (const ch of nodes.childs) {
        const result = await tx.run(`
                MATCH (p:Parent { id: $parentId })
                OPTIONAL MATCH (p)-[r_top_level:CONTAINS]->(ch) 
                WHERE ch.id IN $childIds
                DELETE r_top_level
                
                WITH ch
                WHERE ch:Folder
                OPTIONAL MATCH (ch)-[r*0..]->(sub)
                WHERE NOT 'Bookmark' IN labels(sub)
                WITH collect(distinct ch) + collect(distinct sub) AS allNodes
                UNWIND allNodes AS nodeToDelete
                DETACH DELETE nodeToDelete
                RETURN COUNT(*) AS nodesDeleted
        `, {parentId: ch.parentId, childIds: ch.childIds}); // Note that we're now passing an array of ids

        // Since we're deleting multiple nodes, aggregate the total count of nodes deleted
        const tmpDeleted = result.records[0].get('nodesDeleted').toNumber()
        deleted += tmpDeleted
    }

    // Since we're deleting multiple nodes, aggregate the total count of nodes deleted
    return deleted;
}

const moveToDest = async (nodes: NodesToMove, destId, pos, memberId, tx: Transaction, ogm): Promise<void> => {
    let deleted = 0
    if (nodes.collectionIds.length > 0) {
        await moveCollectionsToDest(nodes.collectionIds, destId, tx)
        await MemberMetaSvc.deleteCollectionPositions(memberId, nodes.collectionIds);
        await ParentMetaSvc.addChildPositions(nodes.collectionIds, destId, pos, ogm)
    }
    for (const ch of nodes.childs) {
        await moveChildToDest(ch, destId, tx)
        await ParentMetaSvc.deleteChildPositions(ch.childIds, ch.parentId, ogm)
        await ParentMetaSvc.addChildPositions(ch.childIds, destId, pos, ogm)
    }
}

const removeHierarchFromCollections = async (collectionIds: string[], tx: Transaction): Promise<number> => {
    const result = await tx.run(`
                MATCH (c:Collection)
                WHERE c.id IN $collectionIds
                OPTIONAL MATCH (c)-[r*0..]->(sub)
                WHERE NOT 'Bookmark' IN labels(sub)
                WITH collect(distinct c) + collect(distinct sub) AS allNodes
                UNWIND allNodes AS nodeToDelete
                DETACH DELETE nodeToDelete
                RETURN COUNT(*) AS nodesDeleted
        `, {collectionIds}); // Note that we're now passing an array of ids

    // Since we're deleting multiple nodes, aggregate the total count of nodes deleted
    return result.records[0].get('nodesDeleted').toNumber();
}

const moveCollectionsToDest = async (collectionIds: string[], destId: string, tx: Transaction): Promise<void> => {
    const result = await tx.run(`
                MATCH (c:Collection)
                WHERE c.id IN $collectionIds
                REMOVE c:Collection // Remove the Collection label if it's no longer needed
                SET c:Folder:Child // Add the Folder label to the node
                WITH c
                MATCH (destParent:Parent {id: $destId})
                OPTIONAL MATCH (c)-[r:HAS]->(member) // Assuming members are directly related to the collection
                DELETE r // Delete the HAS relationship
                WITH c, destParent
                MERGE (destParent)-[:CONTAINS]->(c) // Create a new CONTAINS relationship
        `, {collectionIds, destId}); // Note that we're now passing an array of ids
}

const moveChildToDest = async (childs: ChildsToMove, destId: string, tx: Transaction): Promise<void> => {
    const result = await tx.run(`
                MATCH (ch:Child)
                WHERE ch.id IN $childIds
                
                MATCH (oldParent:Parent {id: $parentId})
                MATCH (oldParent)-[old_r:CONTAINS]->(ch)
                DELETE old_r
                WITH ch
                MATCH (destParent:Parent {id: $destId})
                WITH ch, destParent
                MERGE (destParent)-[:CONTAINS]->(ch) // Create a new CONTAINS relationship
        `, {childIds: childs.childIds, parentId: childs.parentId, destId}); // Note that we're now passing an array of ids
}

const moveBmsToBmLooseContainer = async (childs: ChildsToMove, destId: string, tx: Transaction): Promise<void> => {
    const result = await tx.run(`
                MATCH (ch:Child)
                WHERE ch.id IN $childIds
                
                MATCH (oldParent:Parent {id: $parentId})
                MATCH (oldParent)-[old_r:CONTAINS]->(ch)
                DELETE old_r
                WITH ch
                MATCH (destParent:Parent {id: $destId})
                WITH ch, destParent
                MERGE (destParent)-[:CONTAINS]->(ch) // Create a new CONTAINS relationship
        `, {childIds: childs.childIds, parentId: childs.parentId, destId}); // Note that we're now passing an array of ids
}

export const CollNodeSvc = {
    deleteManyCascade: deleteManyCascade,
    deleteCascade: deleteCascade,
    removeHierarch: removeHierarch,
    moveToDest: moveToDest,
    moveDeepParentBmsToBLC: async (parentIds: string[], tx: Transaction): Promise<void> => {
        // move bms to bmLooseContainer
        await CollNodeSvcDb.removeBmsChPositionsDeep(parentIds, tx)
        await CollNodeSvcDb.moveParentBmsDeepToBLC(parentIds, tx)
    },
    moveBmsToBLC: async (bmIds: string[], tx: Transaction): Promise<void> => {
        // move bms to bmLooseContainer
        await CollNodeSvcDb.removeBmsChPositions(bmIds, tx)
        await CollNodeSvcDb.moveBmsToBLC(bmIds, tx)
    },
}

