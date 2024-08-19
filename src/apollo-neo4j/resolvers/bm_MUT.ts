import {CreateBookmarkDl, SelectedBms} from "../gen/types.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import {getOgm_ParentMeta} from "../../../global/ogm.js";
import {BmCollSvc} from "../services/bmColl.js";
import {BmLooseSvc} from "../services/bmLoose.js";
import {gql} from "graphql-tag";
import {ChildPosSvc} from "../services/child_pos.js";
import {BmSvc} from "../services/bm.js";

export const bm_MUT_typeDefs = gql`
    
    input CreateBookmarkDl {
        parentId: ID
        position: Int
        name: String
        domainName: String!
        urlScheme: String!
        linkPath: String!
        iconUri: String
        description: String
    }
    
    type Mutation {
        deleteAllBms: Int!
        moveAllBms(destId: ID!, pos: Int): Int!
        moveBms2CollNode(destId: ID!, pos: Int, ids: [ID!]!): Int!
        createBookmarkDl(data: CreateBookmarkDl!): ID!
        deleteCollBookmark(id: ID!, parentId: ID!): Int!
        deleteHierarchBmsXGetCollBmCounts(input: [SelectedBms!]): [CollBmCount!]
        deleteBookmark(id: ID!): Int!
        deleteManyBms(ids: [ID!]): Int!
    }
`;

export const bm_MUT_resolver = {
    deleteAllBms: async (_, {}, {driver, ogm}) => {
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
    moveAllBms: async (_, {destId, pos}, {driver, jwt}) => {
        const tx = await driver.session().beginTransaction();
        try {
            // Construct and execute the Cypher query
            const collBmIds = await ChildPosSvc.getAllBmIds(jwt.sub, tx)
            const looseBmIds = await BmLooseSvc.getAllIds(jwt.sub, tx)
            const bmIds = looseBmIds.concat(collBmIds)

            // remain only folder ids
            await tx.run(`
                    match (m:Member {id: $memberId})-[*1..]->(pm:ParentMeta)
                    WITH DISTINCT pm
                    SET pm.childPositions = [id IN pm.childPositions WHERE id STARTS WITH 'f:']
                `, {memberId: jwt.sub});

            // del all CONTAINS relationships
            await tx.run(`
                MATCH (b:Bookmark)<-[old_r:CONTAINS]-(p:BmContainer)<--(Member {id: $memberId})
                DELETE old_r
            `,{memberId: jwt.sub});

            // create new CONTAINS relationships
            await tx.run(`
                MATCH (m:Member {id: $memberId})-->(b:Bookmark)
                WITH DISTINCT b
                WHERE b.id IN $bmIds
                WITH b
                MATCH (parent:Parent {id: $destId})
                MERGE (parent)-[:CONTAINS]->(b)
            `, {memberId: jwt.sub, destId, bmIds});

            await ParentMetaSvc.addChildPositions(jwt.sub, bmIds, destId, pos, tx)

            await tx.commit()
            return true;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    moveBms2CollNode: async (_, {destId, pos, ids}, {driver, jwt}) => {
        const tx = await driver.session().beginTransaction();
        try {
            await ParentMetaSvc.delChPositions2(jwt.sub, ids, tx)
            await BmSvc.move(jwt.sub, ids, destId, tx)
            await ParentMetaSvc.addChildPositions(jwt.sub, ids, destId, pos, tx)
            await tx.commit()
            return true;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    deleteCollBookmark: async (_, {id, parentId}, {driver, ogm}) => {
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
                const childPositions = parentMeta[0].childPositions.filter(childId => childId !== ChildPosSvc.getPrefixedId(id));
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
    deleteHierarchBmsXGetCollBmCounts: async (_, {input}: { input: SelectedBms[] }, {driver, jwt}) => {
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
                await ParentMetaSvc.delChPositions(jwt.sub, childsWrapper.bmIds, childsWrapper.parentId, tx)
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
            let bmId: any = null
            if (data.parentId) {
                bmId = await BmCollSvc.create(data, jwt.sub, ogm, tx);
            } else {
                bmId = await BmLooseSvc.create(data, jwt.sub, tx, ogm);
            }

            tx.commit()
            return bmId;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
}