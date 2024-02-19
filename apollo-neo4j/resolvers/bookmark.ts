import {ogm} from "../ogm";
import { Driver } from 'neo4j-driver';

export const ogm_Bookmark = ogm.model("Bookmark");

export const bookmarkResolvers = {
    Mutation: {
        deleteBookmark: async (_, { id, parentId }, { driver }: { driver: Driver }) => {
            // Your code here
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
                const ParentMeta = ogm.model("ParentMeta");
                const parentMeta = await ParentMeta.find({
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
                    await ParentMeta.update({
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
        // deleteBookmark: async (_, { id }, { driver }) => {
        //   const session = driver.session();
        //   try {
        //     await session.run(
        //       `MATCH (n{ id: $id })
        //                 OPTIONAL MATCH (n)-[r*]->(m)
        //                 DETACH DELETE n, r, m`,
        //       { id }
        //     );
        //     return true;
        //   } catch (error) {
        //     throw error;
        //   } finally {
        //     await session.close();
        //   }
        // },
    },
};