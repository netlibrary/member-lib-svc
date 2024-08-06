import {Driver} from 'neo4j-driver';
import {FolderCreateInput} from "../gen/types.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import {getOgm_Folder, getOgm_ParentMeta} from "../../../global/ogm.js";


export const folderResolvers = {
    Mutation: {
        createFolder: async (_, {name, position, parentId}: {
            name: string, position: number, parentId: string
        }, {driver}) => {
            const tx = await driver.session().beginTransaction();
            try {
                const createFolderInput: FolderCreateInput = {
                    name: name,
                    parentMeta: {
                        create: {
                            node: {
                                childPositions: []
                            }
                        }
                    },
                    ...(parentId ? {
                        parent: {
                            connect: {where: {node: {id: parentId}}}
                        }
                    } : {})
                }

                const folder = await getOgm_Folder().create({input: createFolderInput,});

                const folderId = folder.folders[0].id
                console.log(
                    `Bookmark created with ID: ${folderId}`
                );

                await ParentMetaSvc.addChildPositions(folderId, parentId, position)

                return folderId;
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },

        deleteFolder: async (_, {id, parentId}, {driver}: { driver: Driver }) => {
            // Your code here
            const tx = await driver.session().beginTransaction();
            try {
                // Construct and execute the Cypher query
                const result = await tx.run(`
                    MATCH (n:DeleteCascade { id: $id })
                    OPTIONAL MATCH (n)-[r*0..]->(sub)
                    DETACH DELETE n, sub
                    RETURN COUNT(sub) AS nodesDeleted
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
        // deleteFolder: async (_, { id }, { driver }) => {
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