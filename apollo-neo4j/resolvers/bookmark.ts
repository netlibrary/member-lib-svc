import {ogm} from "../ogm";
import {Driver} from 'neo4j-driver';
import {ogm_Collection} from "./collection";
import {BookmarkCreateInput} from "../gen/types";
import {addChildPosition} from "../services/parent-meta";

export const ogm_Bookmark = ogm.model("Bookmark");

export const bookmarkResolvers = {
    Mutation: {
        deleteBookmark: async (_, {id, parentId}, {driver}: { driver: Driver }) => {
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
        createBookmarkDl: async (_, {data}: {
            data: any
        }, {driver}) => {
            const tx = await driver.session().beginTransaction();
            try {
                const {parentId, position, name, domainName, urlScheme, linkPath, iconUri, description} = data;

                const createBookmarkInput: any = {
                    description: description,
                    name: name,
                    domainName: domainName,
                    urlScheme: urlScheme,
                    linkPath: linkPath,
                    iconUri: iconUri,
                    ...(parentId ? {
                        parent: {
                            connect: {where: {node: {id: parentId}}}
                        }
                    } : {})
                }

                const bookmark = await ogm_Bookmark.create({input: createBookmarkInput,});

                const bookmarkId = bookmark.bookmarks[0].id
                console.log(
                    `Bookmark created with ID: ${bookmarkId}`
                );

                if (parentId) {
                    await addChildPosition(bookmarkId, parentId, position)
                }

                return bookmarkId;
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },
    },
};