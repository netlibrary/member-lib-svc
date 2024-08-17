import {Transaction} from "neo4j-driver";
import {randomUUID} from "node:crypto";

const deleteManyCascade = async (ids: string[], tx: Transaction): Promise<number> => {
    const result = await tx.run(`
            UNWIND $ids AS id
            MATCH (n:DeleteCascade { id: id })
            OPTIONAL MATCH (n)-[r*0..]->(sub)
            DETACH DELETE n, sub
            RETURN COUNT(sub) AS nodesDeleted
        `, {ids}); // Note that we're now passing an array of ids

    // Since we're deleting multiple nodes, aggregate the total count of nodes deleted
    return result.records.reduce((acc, record) => acc + record.get('nodesDeleted').toNumber(), 0);
}

const deleteCascade = async (id: string, tx: Transaction): Promise<number> => {
    const result = await tx.run(`
            MATCH (n:DeleteCascade { id: id })
            OPTIONAL MATCH (n)-[r*0..]->(sub)
            DETACH DELETE n, sub
            RETURN COUNT(sub) AS nodesDeleted
        `, {id}); // Note that we're now passing an array of ids

    // Since we're deleting multiple nodes, aggregate the total count of nodes deleted
    return result.records[0].get('nodesDeleted').toNumber();
}

export const NodeSvc = {
    deleteManyCascade: deleteManyCascade,
    deleteCascade: deleteCascade,
    genBmId: () => {
        return `b:${randomUUID()}`
    },
    genCollId: () => {
        return `c:${randomUUID()}`
    },
    genFolderId: () => {
        return `f:${randomUUID()}`
    },
    genId: () => {
        return `${randomUUID()}`
    }
}

