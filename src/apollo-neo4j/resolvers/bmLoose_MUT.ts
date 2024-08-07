import {Driver} from "neo4j-driver";
import {ogm} from "../ogm.js";
import {SelectedBms} from "../gen/types.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import {getOgm_Bookmark, getOgm_ParentMeta} from "../../../global/ogm.js";

export const bmLoose_MUT_resolver = {
    deleteManyBms: async (_, {ids}, {driver}: { driver: Driver }) => {
        const tx = await driver.session().beginTransaction();
        try {
            // Construct and execute the Cypher query
            const nodesDeleted = (await tx.run(`
                    MATCH (b:Bookmark)
                    WHERE b.id IN $ids
                    DETACH DELETE b
                    RETURN COUNT(b) AS nodesDeleted
                `, {ids: ids})).records[0].get('nodesDeleted').toNumber();

            await tx.commit()
            return nodesDeleted;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    deleteBookmark: async (_, {id}, {driver}: { driver: Driver }) => {
        const tx = await driver.session().beginTransaction();
        try {
            // Construct and execute the Cypher query
            const result = await tx.run(`
                    MATCH (n:Bookmark { id: $id })
                    DETACH DELETE n
                    RETURN COUNT(n) AS nodesDeleted
                `, {id});

            // Extract the nodesDeleted count from the result
            const nodesDeleted = result.records[0].get('nodesDeleted').toNumber();

            await tx.commit()
            return nodesDeleted;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
}