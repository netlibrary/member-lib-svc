import {Driver} from "neo4j-driver";
import {ChildPosSvc} from "../services/child_pos.js";
import {BmLooseSvc} from "../services/bmLoose.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import {gql} from "graphql-tag";
import {BmSvc} from "../services/bm.js";

export const bmLoose_MUT_typeDefs = gql`
    type Mutation {
        moveCollBmsInContainer(nodes: SelectedNodes!): Int!
        deleteAllLooseBms: Int!
        moveLooseBms2CollNode(destId: ID!, pos: Int, ids: [ID!]): Int!
    }
`;

export const bmLoose_MUT_resolver = {
    deleteManyBms: async (_, {ids}, {driver, jwt}) => {
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
    moveLooseBms2CollNode: async (_, {destId, pos}, {driver, jwt}) => {
        const tx = await driver.session().beginTransaction();
        try {
            // Construct and execute the Cypher query
            const looseBmIds = await BmLooseSvc.getAllIds(jwt.sub, tx)

            await BmSvc.move(jwt.sub, looseBmIds, destId, tx)

            await ParentMetaSvc.addChildPositions(jwt.sub, looseBmIds, destId, pos, tx)

            await tx.commit()
            return true;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
}