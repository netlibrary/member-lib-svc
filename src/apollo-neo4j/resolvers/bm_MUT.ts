import {ParentMetaSvc} from "../services/parent_meta.js";
import {BmCollSvc} from "../services/bmColl.js";
import {BmLooseSvc} from "../services/bmLoose.js";
import {gql} from "graphql-tag";
import {ChildPosSvc} from "../services/child_pos.js";
import {CreateBookmarkDl} from "../../gen/types.js";

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
        createBookmarkDl(data: CreateBookmarkDl!): ID!
    }
`;

export const bm_MUT_resolver = {
    deleteAllBms: async (_, {}, {driver, jwt, isTest}) => {
        const tx = await driver.session().beginTransaction();
        try {

            await tx.run(`
                    MATCH (m:Member {id: $memberId})-->(b:Bookmark)
                    DETACH DELETE b
                `, {memberId: jwt.sub});

            await tx.run(`
                    MATCH (m:Member {id: $memberId})-->(Parent)-->(pm:ParentMeta)
                    SET pm.childPositions = [id IN pm.childPositions WHERE id STARTS WITH 'f:']
                `, {memberId: jwt.sub});

            if (isTest) {
                await tx.rollback();
            }
            else {
                await tx.commit();
            }
            return true;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    moveAllBms: async (_, {destId, pos}, {driver, jwt, isTest}) => {
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

            if (isTest) {
                await tx.rollback();
            }
            else {
                await tx.commit();
            }
            return true;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    createBookmarkDl: async (_, {data}: {
        data: CreateBookmarkDl
    }, {driver, jwt, isTest}) => {
        const tx = await driver.session().beginTransaction();
        try {
            let bmId: any = null
            if (data.parentId) {
                bmId = await BmCollSvc.create(data, jwt.sub, tx);
            } else {
                bmId = await BmLooseSvc.create(data, jwt.sub, tx);
            }

            if (isTest) {
                await tx.rollback()
            } else {
                await tx.commit()
            }
            return bmId;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
}