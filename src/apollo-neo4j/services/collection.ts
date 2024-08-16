export const CollectionSvc = {
    moveColls2CollNode: async (memberId, collIds, destId, tx): Promise<string[]> => {
        return (await tx.run(`
                MATCH (c:Collection)<-[oldR]-(Member {id: $memberId})
                where c.id IN $collIds
                DELETE oldR
                REMOVE c:Collection
                SET c:Folder
                set c.id = 'f:' + substring(c.id, 2) 
                with c
                MATCH (bmc:BmContainer {id: $destId})
                MERGE (bmc)-[:CONTAINS]->(c)
                return collect(c.id) as r
            `, {memberId, collIds, destId})).records[0].get('r');
    }
}