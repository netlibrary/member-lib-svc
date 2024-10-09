import {ParentMetaSvc} from "../services/parent_meta.js";
import {gql} from "graphql-tag";
import {Folder_SvcDb} from "../services_db/folder.js";

export const folder_MUT_typeDefs = gql`
    type Mutation {
        createFolder(name: String!, position: Int!, parentId: ID!): ID
        deleteFolder(id: ID!, parentId: ID!): Int!
    }
`;

export const folderResolvers = {
    Mutation: {
        createFolder: async (_, {name, position, parentId}: {
            name: string, position: number, parentId: string
        }, {driver, jwt}) => {
            const tx = await driver.session().beginTransaction();
            try {
                const folderId = await Folder_SvcDb.create({name, parentId}, {tx, jwt})

                await ParentMetaSvc.addChildPositions(jwt.sub, [folderId], parentId, position, tx)

                await tx.commit()
                return folderId;
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },

        deleteFolder: async (_, {id, parentId}, {driver, ogm}) => {
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
                const parentMeta = await ogm.model("ParentMeta").find({
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
                    await ogm.model("ParentMeta").update({
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