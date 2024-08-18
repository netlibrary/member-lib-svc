export const BmSvc = {
    move: async (memberId, ids, destId, tx) => {
        // switch CONTAINS relationships
        await tx.run(`
                MATCH (b:Bookmark)<--(Member {id: $memberId})
                where b.id IN $ids
                with b
                match (b)<-[old_r:CONTAINS]-(p:BmContainer)
                DELETE old_r
                with b
                MATCH (bmc:BmContainer {id: $destId})
                MERGE (bmc)-[:CONTAINS]->(b)
            `,{memberId: memberId, ids, destId});
    }
}