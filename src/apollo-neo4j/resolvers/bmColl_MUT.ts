import {CreateBookmarkDl, SelectedBms} from "../gen/types.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import {getOgm_ParentMeta} from "../../../global/ogm.js";
import {BmCollSvc} from "../services/bmColl.js";
import {BmLooseSvc} from "../services/bmLoose.js";
import {gql} from "graphql-tag";
import {ChildPosSvc} from "../services/child_pos.js";
import {BmSvc} from "../services/bm.js";

export const bmColl_MUT_typeDefs = gql`
    input SelectedBms {
        parentId: ID!
        bmIds: [ID!]!
    }
    
    type Mutation {
        moveBms2CollNode(destId: ID!, pos: Int, ids: [ID!]!): Int!
        deleteHierarchBmsXGetCollBmCounts(input: [SelectedBms!]): [CollBmCount!]
    }
`;

export const bmColl_MUT_resolver = {
    moveBms2CollNode: async (_, {destId, pos, ids}, {driver, jwt, isTest}) => {
        const tx = await driver.session().beginTransaction();
        try {
            await ParentMetaSvc.delChPositions2(jwt.sub, ids, tx)
            await BmSvc.move(jwt.sub, ids, destId, tx)
            await ParentMetaSvc.addChildPositions(jwt.sub, ids, destId, pos, tx)

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
}