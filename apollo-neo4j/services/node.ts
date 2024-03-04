import {Session} from "neo4j-driver";

const deleteManyCascade = async (ids: string[], session: Session): Promise<number> => {
    const result = await session.run(`
            UNWIND $ids AS id
            MATCH (n:DeleteCascade { id: id })
            OPTIONAL MATCH (n)-[r*0..]->(sub)
            DETACH DELETE n, sub
            RETURN COUNT(sub) AS nodesDeleted
        `, {ids}); // Note that we're now passing an array of ids

    // Since we're deleting multiple nodes, aggregate the total count of nodes deleted
    return result.records.reduce((acc, record) => acc + record.get('nodesDeleted').toNumber(), 0);
}

const deleteCascade = async (id: string, session: Session): Promise<number> => {
    const result = await session.run(`
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

