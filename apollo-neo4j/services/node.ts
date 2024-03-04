import {Session, Transaction} from "neo4j-driver";

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
    deleteCascade: deleteCascade
}

