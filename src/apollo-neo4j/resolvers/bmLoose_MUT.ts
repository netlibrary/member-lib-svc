import {Driver} from "neo4j-driver";
import {BmLooseSvc} from "../services/bmLoose.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import {gql} from "graphql-tag";
import {BmSvc} from "../services/bm.js";

export const bmLoose_MUT_typeDefs = gql`
    type Mutation {
        deleteAllLooseBms: Int!
        deleteManyLooseBms(ids: [ID!]): Int!
        moveAllLooseBm2CollNode(destId: ID!, pos: Int): Int!
        moveManyLooseBm2CollNode(destId: ID!, pos: Int, ids: [ID!]): Int!
    }
`;

export const bmLoose_MUT_resolver = {
    deleteManyLooseBms: async (_, {ids}, {driver, jwt}) => {
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
    deleteAllLooseBms: async (_, {}, {driver}: { driver: Driver }) => {
        const tx = await driver.session().beginTransaction();
        try {
            // Construct and execute the Cypher query
            const nodesDeleted = (await tx.run(`
                    MATCH (blc:BmLooseContainer)-[:CONTAINS]->(b:Bookmark)
                    DETACH DELETE b
                    RETURN COUNT(b) AS r
                `,)).records[0].get('r').toNumber();

            await tx.commit()
            return nodesDeleted;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    moveAllLooseBm2CollNode: async (_, {destId, pos}, {driver, jwt, isTest}) => {
        const tx = await driver.session().beginTransaction();
        try {
            // Construct and execute the Cypher query
            const looseBmIds = await BmLooseSvc.getAllIds(jwt.sub, tx)

            await BmSvc.move(jwt.sub, looseBmIds, destId, tx)

            await ParentMetaSvc.addChildPositions(jwt.sub, looseBmIds, destId, pos, tx)

            if (isTest) {
                await tx.rollback()
            } else {
                await tx.commit()
            }
            return true;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    moveManyLooseBm2CollNode: async (_, {destId, pos, ids}, {driver, jwt, isTest}) => {
        const tx = await driver.session().beginTransaction();
        try {
            await BmSvc.move(jwt.sub, ids, destId, tx)

            await ParentMetaSvc.addChildPositions(jwt.sub, ids, destId, pos, tx)

            if (isTest) {
                await tx.rollback()
            } else {
                await tx.commit()
            }
            return true;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
}