// This function will save the state of multiple entity types
import {Driver} from "neo4j-driver";

export async function saveDbState(driver: Driver): Promise<any> {
    const session = driver.session();
    try {
        const result = await session.run(`
                MATCH (n)
                OPTIONAL MATCH (n)-[r]->(m)
                RETURN 
                    collect(distinct {
                        labels: labels(n),
                        properties: properties(n),
                        id: n.id
                    }) as nodes,
                    collect(distinct {
                        type: type(r),
                        properties: properties(r),
                        startNode: startNode(r).id,
                        endNode: endNode(r).id
                    }) as relationships
            `);
        return result.records[0].toObject();
    } finally {
        await session.close();
    }
}

// This function will restore the state of multiple entity types
export async function restoreDbState(driver: Driver, state: any) {
    const session = driver.session();
    try {
        // First, clear the database
        await session.run('MATCH (n) DETACH DELETE n');

        // Recreate nodes
        for (const node of state.nodes) {
            await session.run(
                `CREATE (n:${node.labels.join(':')} $props)`,
                { props: node.properties }
            );
        }

        // Recreate relationships
        for (const rel of state.relationships) {
            await session.run(`
                    MATCH (start), (end)
                    WHERE start.id = $startId AND end.id = $endId
                    CREATE (start)-[r:${rel.type} $props]->(end)
                `, {
                startId: rel.startNode,
                endId: rel.endNode,
                props: rel.properties
            });
        }
    } finally {
        await session.close();
    }
}