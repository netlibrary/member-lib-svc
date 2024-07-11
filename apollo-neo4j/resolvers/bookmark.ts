import {ogm} from "../ogm";
import neo4j, {Driver, Integer, Session, Transaction} from 'neo4j-driver';
import {ogm_Collection} from "./collection";
import {BmsPaged, BookmarkCreateInput, BookmarkFilter_In, ParentsChildren} from "../gen/types";
import {ParentMetaSvc} from "../services/parent_meta";
import {memberIds} from "../../db_seeder/member";

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
                    await ParentMetaSvc.addChildPositions(bookmarkId, parentId, position)
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
    Query: {
        bmsByFilter: async (_, {filter, limit, offset}: {
            filter: BookmarkFilter_In,
            limit: number,
            offset: number
        }, {driver}) => {
            const tx: Transaction = await driver.session().beginTransaction();
            try {
                let baseQueryParts: any = [];
                // Determine path based on bmLoose
                if (filter.bmLoose === true) {
                    // Path specifically for BmsContainer as parent
                    baseQueryParts.push('MATCH (member:Member {id: $memberId})-[:OWNS]->(container:BmsContainer)-[:CONTAINS*]->(bookmark:Bookmark)');
                } else if (filter.bmLoose === false) {
                    // Path specifically for Collection as root
                    baseQueryParts.push('MATCH (member:Member {id: $memberId})-[:OWNS]->(collection:Collection)-[:CONTAINS*]->(bookmark:Bookmark)');
                } else {
                    // General path for all bookmarks
                    baseQueryParts.push('MATCH (member:Member {id: $memberId})-[:OWNS|CONTAINS*]->(bookmark:Bookmark)');
                }
                let queryParams: {
                    [key: string]: string | string[] | Integer
                } = {memberId: memberIds[0]};

                // Handle bmUrl filter
                if (filter.bmUrl) {
                    baseQueryParts.push('WHERE bookmark.urlScheme = $urlScheme AND bookmark.linkPath = $linkPath');
                    // queryParams.urlScheme = extractUrlScheme(filter.bmUrl); // Assume a function to extract URL scheme
                    // queryParams.linkPath = extractLinkPath(filter.bmUrl); // Assume a function to extract link path
                }

                // Handle bmTxt filter
                if (filter.bmTxt) {
                    const txtCondition = 'bookmark.description CONTAINS $bmTxt OR bookmark.name CONTAINS $bmTxt';
                    baseQueryParts.push(filter.bmUrl ? `AND (${txtCondition})` : `WHERE ${txtCondition}`);
                    queryParams.bmTxt = filter.bmTxt;
                }

                // Handle bmTags filter
                if (filter.bmTags && filter.bmTags.length > 0) {
                    baseQueryParts.push('WITH bookmark', 'MATCH (bookmark)-[:HAS]->(tag:Tag)');
                    baseQueryParts.push(`WHERE tag.id IN $bmTags`);
                    queryParams.bmTags = filter.bmTags;
                }

                // Handle bmParentsTxt filter, considering bmLoose
                if (filter.bmParents && filter.bmParents.length > 0 && !filter.bmLoose) {
                    baseQueryParts.push('MATCH (bookmark)<-[:CONTAINS]-(p:Parent)');
                    baseQueryParts.push(`WHERE p.id IN $bmParents`);
                    queryParams.bmParents = filter.bmParents;
                }

                // Clone the base query parts for the count query
                let countQueryParts = Array.from(baseQueryParts);
                // Add RETURN COUNT(bookmark) for the count query
                countQueryParts.push('RETURN COUNT(bookmark) AS totalCount');
                const countQueryString = countQueryParts.join(' ');
                // Execute the count query
                const countResult = await tx.run(countQueryString, queryParams);
                const totalCount = countResult.records[0].get('totalCount').low;

                // Sorting (optional)
                if (filter.sortBy) {
                    const sortDir = filter.sortDir === 'DESC' ? 'DESC' : 'ASC'; // Default to ASC if not specified
                    baseQueryParts.push(`ORDER BY bookmark.${filter.sortBy} ${sortDir}`);
                }

                baseQueryParts.push('WITH bookmark', 'SKIP $offset', "LIMIT $limit");
                queryParams.offset = neo4j.int(offset);
                queryParams.limit = neo4j.int(10);

                 // Assuming the count fits into a JS number

                // Complete the base query with sorting (optional) and pagination
                baseQueryParts.push(`RETURN COLLECT(${bm_CypherSel.BookmarkDl('bookmark')}) AS bookmarks`);

                // Join the query parts into complete query strings
                const queryString = baseQueryParts.join(' ');
                // Execute the main query to fetch paginated bookmarks
                const dbRes = await tx.run(queryString, queryParams);

                const bookmarks = dbRes.records[0].get('bookmarks');

                // Return the paginated bookmarks and the total count
                const res = {
                    bookmarks: bookmarks,
                    totalCount: totalCount
                };

                return res
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }

        }
    }
};

export const bm_CypherSel = {
    BookmarkDl: (alias: string) => `{
  id: ${alias}.id, 
  name: ${alias}.name, 
  domainName: ${alias}.domainName, 
  linkPath: ${alias}.linkPath, 
  urlScheme: ${alias}.urlScheme, 
  iconUri: ${alias}.iconUri, 
  tags: [( ${alias} )-[:HAS]->(t:Tag) | { id: t.id, name: t.name }] 
}`,

};