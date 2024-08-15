import {Driver} from "neo4j-driver";
import {ogm} from "../ogm.js";
import {CreateBookmarkDl, SelectedBms} from "../gen/types.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import {getOgm_Bookmark, getOgm_ParentMeta, setOGMs} from "../../../global/ogm.js";
import {BmCollSvc} from "../services/bmColl.js";
import {BmLooseSvc} from "../services/bmLoose.js";

export const bm_MUT_resolver = {
    deleteAllBms: async (_, {}, {driver}: { driver: Driver }) => {
        const tx = await driver.session().beginTransaction();
        try {
            // Construct and execute the Cypher query
            await tx.run(`
                    MATCH (b:Bookmark)
                    DETACH DELETE b
                `);

            await tx.run(`
                    MATCH (p:ParentMeta)
                    SET p.childPositions = []
                `);
            await tx.commit()
            return true;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    deleteCollBookmark: async (_, {id, parentId}, {driver}: { driver: Driver }) => {
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

            // update parent meta
            const parentMeta = await getOgm_ParentMeta().find({
                where: {
                    parentConnection: {
                        node: {
                            id: parentId
                        }
                    }
                }
            });
            // If parentMeta is found, update the child positions
            if (parentMeta && parentMeta.length > 0) {
                const childPositions = parentMeta[0].childPositions.filter(childId => childId !== id);
                await getOgm_ParentMeta().update({
                    where: {id: parentMeta[0].id},
                    update: {childPositions: childPositions},
                });
            } else {
                // Handle case where MemberMeta object is not found
                throw new Error('ParentMeta not found for parentId: ' + parentId);
            }
            await tx.commit()
            return nodesDeleted;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    deleteHierarchBmsXGetCollBmCounts: async (_, {input}: { input: SelectedBms[] }, {driver, ogm}) => {
        const tx = await driver.session().beginTransaction();
        const bmIds = input.map(i => i.bmIds).flat();
        try {
            // Construct and execute the Cypher query
            const result = await tx.run(`
                        MATCH (b:Bookmark) WHERE b.id IN $bmIds
                        OPTIONAL MATCH (c:Collection)-[:CONTAINS*]->(b)
                        DETACH DELETE b
                        WITH distinct c
                        OPTIONAL MATCH (c)-[:CONTAINS*]->(b2:Bookmark)
                        with c, COUNT(b2) as bmCount
                        with collect({id: c.id, bmCount: bmCount}) as r
                        RETURN r
                `, {bmIds});

            // Extract the nodesDeleted count from the result
            const res = result.records[0].get('r');

            for (const childsWrapper of input) {
                await ParentMetaSvc.deleteChildPositions([...childsWrapper.bmIds], childsWrapper.parentId, ogm)
            }

            await tx.commit()
            return res;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    createBookmarkDl: async (_, {data}: {
        data: CreateBookmarkDl
    }, {driver, ogm, jwt}) => {
        const tx = await driver.session().beginTransaction();
        try {
            const parentId = data.parentId;

            if(parentId) {
                return await BmCollSvc.create(data, jwt.sub, ogm);
            } else {
                return await BmLooseSvc.create(data, jwt.sub, tx, ogm);
            }
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
}