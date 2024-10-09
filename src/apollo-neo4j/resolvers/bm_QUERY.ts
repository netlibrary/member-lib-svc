import {BookmarkFilter_In} from "../gen/types.js";
import neo4j, {Integer, Transaction} from "neo4j-driver";
import {bm_CypherSel} from "./bm.js";

export const bm_QUERY_resolver = {
    bmsByFilter: async (_, {filter, limit, offset}: {
        filter: BookmarkFilter_In,
        limit: number,
        offset: number
    }, {driver, jwt}) => {
        const tx: Transaction = await driver.session().beginTransaction();
        try {
            let baseQueryParts: any = [];
            let queryParams: {
                [key: string]: string | string[] | Integer
            } = {memberId: jwt.sub};

            baseQueryParts.push(`MATCH (member:Member {id: $memberId})-[:OWNS]->(container:BmContainer)-[:CONTAINS*1..]->(bookmark:Bookmark)`);

            const conditions: string[] = [];
            const conditionVars: string[] = ["bookmark"];
            // Handle bmUrl filter
            // if (filter.bmUrl) {
            //     baseQueryParts.push('WHERE bookmark.urlScheme = $urlScheme AND bookmark.linkPath = $linkPath');
            //     // queryParams.urlScheme = extractUrlScheme(filter.bmUrl); // Assume a function to extract URL scheme
            //     // queryParams.linkPath = extractLinkPath(filter.bmUrl); // Assume a function to extract link path
            // }

            // Handle bmTxt filter
            if (filter.bmTxt) {
                const txtCondition =
                    '(toLower(bookmark.description) CONTAINS toLower($bmTxt) ' +
                    'OR toLower(bookmark.linkPath) CONTAINS toLower($bmTxt)' +
                    'OR toLower(bookmark.domainName) CONTAINS toLower($bmTxt)' +
                    'OR toLower(bookmark.name) CONTAINS toLower($bmTxt))'
                conditions.push(txtCondition);
                queryParams.bmTxt = filter.bmTxt;
            }

            // Determine path based on bmLoose
            if (filter.bmLoose != null) {
                if (filter.bmLoose === true) {
                    // Path specifically for BmLooseContainer as parent
                    baseQueryParts.push(`optional MATCH (container2:BmLooseContainer)-->(bookmark)`);
                } else  {
                    // Path specifically for Collection as root
                    baseQueryParts.push(`optional MATCH (container2:Collection)-[:CONTAINS*1..]->(bookmark)`);
                }
                conditionVars.push(`container2`);
                conditions.push('container2 IS NOT NULL');
            }

            // Handle bmTags filter
            if (filter.bmTags && filter.bmTags.length > 0) {
                baseQueryParts.push(`optional MATCH (bookmark)-[:HAS]->(tag:Tag)`);
                conditionVars.push(`tag`);
                conditions.push(`tag.id IN $bmTags`);
                queryParams.bmTags = filter.bmTags;
            }

            // Handle bmParentsTxt filter, considering bmLoose
            if (filter.bmParents && filter.bmParents.length > 0) {
                baseQueryParts.push(`optional MATCH (bookmark)<-[:CONTAINS*1..]-(p:Parent)`);
                conditionVars.push(`p`);
                conditions.push(`p.id IN $bmParents`);
                queryParams.bmParents = filter.bmParents;
            }

            // Combine the conditions using OR if there are multiple conditions
            if (conditions.length > 0) {
                baseQueryParts.push(`with ${conditionVars.join(",")}`);
                baseQueryParts.push(`WHERE ${conditions.join(filter.matchAll ? ' and ' : ' OR ')}`);
            }

            baseQueryParts.push('with distinct bookmark');

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

            // Complete the base query with sorting (optional) and pagination
            baseQueryParts.push(`optional match (p:Collection|Folder)-[:CONTAINS]->(bookmark)`);
            baseQueryParts.push(`optional match (c:Collection)-[:CONTAINS*]->(bookmark)`);
            baseQueryParts.push(`RETURN COLLECT(${bm_CypherSel.BookmarkDl2('bookmark')}) AS bookmarks`);

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