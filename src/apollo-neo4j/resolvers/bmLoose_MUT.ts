import {Driver} from "neo4j-driver";
import {ChildPosSvc} from "../services/child_pos.js";
import {BmLooseSvc} from "../services/bmLoose.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import {gql} from "graphql-tag";

export const bmLoose_MUT_typeDefs = gql`
    type Mutation {
        moveCollBmsInContainer(nodes: SelectedNodes!): Int!
        deleteAllLooseBms: Int!
        moveLooseBms2CollNode(destId: ID!, pos: Int): Int!
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
    moveLooseBms2CollNode: async (_, {destId, pos}, {driver, ogm, jwt}) => {
        const tx = await driver.session().beginTransaction();
        try {
            // Construct and execute the Cypher query
            const looseBmIds = await BmLooseSvc.getAllIds(jwt.sub, tx)

            // switch CONTAINS relationships
            await tx.run(`
                MATCH (b:Bookmark)<--(Member {id: $memberId})
                where b.id IN $looseBmIds
                with b
                match (b)<-[old_r:CONTAINS]-(p:BmContainer)
                DELETE old_r
                with b
                MATCH (bmc:BmContainer {id: $destId})
                MERGE (bmc)-[:CONTAINS]->(b)
            `,{memberId: jwt.sub, looseBmIds, destId});

            await ParentMetaSvc.addChildPositions(jwt.sub, looseBmIds, destId, pos, ogm, tx)

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