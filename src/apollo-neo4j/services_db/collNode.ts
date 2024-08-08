import {Transaction} from "neo4j-driver";


export const CollNodeSvcDb = {
    removeBmsChPositions: async (bmIds: string[], tx: Transaction): Promise<void> => {
        // move bms to bmLooseContainer
        // set parentMeta.childPositions to [folderIds]
        await tx.run(`
            MATCH (b:Bookmark)
            WHERE b.id IN $bmIds
            MATCH (b)<-[:CONTAINS]-(p)
            OPTIONAL MATCH (p)-[:HAS]->(pm:ParentMeta)
            WITH b,pm,p
            set pm.childPositions = [childId IN pm.childPositions WHERE childId <> b.id]
            return 1 as r
        `, {bmIds: bmIds}); // Note that we're now passing an array of ids
    },
    moveBmsToBLC: async (bmIds: string[], tx: Transaction): Promise<number> => {
        // move bms to bmLooseContainer
        return (await tx.run(`
            MATCH (b:Bookmark)
            WHERE b.id IN $bmIds
            MATCH (b)<-[lastRel:CONTAINS]-(lastParent)
            MATCH (blc:BmLooseContainer)
            DELETE lastRel
            CREATE (blc)-[:CONTAINS]->(b)
            RETURN 1 as r
        `, {bmIds: bmIds})).records[0].get('r').toNumber(); // Note that we're now passing an array of ids
    },
    moveParentBmsDeepToBLC: async (parentIds: string[], tx: Transaction): Promise<number> => {
        // move bms to bmLooseContainer
        return (await tx.run(`
            MATCH (topP:Parent)
            WHERE topP.id IN $parentIds
            OPTIONAL MATCH (topP)-[:CONTAINS*1..]->(b:Bookmark)
            MATCH (b)<-[lastRel:CONTAINS]-(lastParent)
            MATCH (bc:BmLooseContainer)
            DELETE lastRel
            CREATE (bc)-[:CONTAINS]->(b)
            RETURN 1 as r
        `, {parentIds: parentIds})).records[0].get('r').toNumber();
    },
    removeBmsChPositionsDeep: async (parentIds: string[], tx: Transaction): Promise<number> => {
        // move bms to bmLooseContainer
        // set parentMeta.childPositions to [folderIds]
        return (await tx.run(`
            MATCH (topP:Parent)
            WHERE topP.id IN $parentIds
            WITH topP
            OPTIONAL MATCH (topP)-[:HAS]->(pm:ParentMeta)
            OPTIONAL MATCH (topP)-[:CONTAINS]->(f:Folder)
            WITH topP,pm,collect(f.id) AS folderIds
            set pm.childPositions = [childId IN pm.childPositions WHERE childId IN folderIds]
            with topP           
            OPTIONAL MATCH (topP)-[:CONTAINS*1..]->(p:Parent)
            optional match (p)-[:HAS]->(pm2:ParentMeta)
            optional match (p)-[:CONTAINS]->(f2:Folder)
            WITH pm2, collect(f2.id) AS folderIds
            set pm2.childPositions = [childId IN pm2.childPositions WHERE childId IN folderIds]
            return 1 as r
        `, {parentIds: parentIds})).records[0].get('r').toNumber();
    }
}

