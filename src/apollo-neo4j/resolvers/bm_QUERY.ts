import {BookmarkFilter_In} from "../gen/types.js";
import neo4j, {Integer, Transaction} from "neo4j-driver";
import {memberIds} from "../../../global/vars.js";
import {bm_CypherSel} from "./bm.js";

export const bm_QUERY_resolver = {
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
                // Path specifically for BmContainer as parent
                baseQueryParts.push('MATCH (member:Member {id: $memberId})-[:OWNS]->(container:BmContainer)-[:CONTAINS*1..]->(bookmark:Bookmark)');
            } else if (filter.bmLoose === false) {
                // Path specifically for Collection as root
                baseQueryParts.push('MATCH (member:Member {id: $memberId})-[:OWNS]->(collection:Collection)-[:CONTAINS*1..]->(bookmark:Bookmark)');
            } else {
                // General path for all bookmarks
                baseQueryParts.push('MATCH (member:Member {id: $memberId})-[:OWNS|CONTAINS*1..]->(bookmark:Bookmark)');
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
                const txtCondition = 'toLower(bookmark.description) CONTAINS toLower($bmTxt) OR toLower(bookmark.name) CONTAINS toLower($bmTxt)';
                baseQueryParts.push(filter.bmUrl ? `AND (${txtCondition})` : `WHERE ${txtCondition}`);
                queryParams.bmTxt = filter.bmTxt;
            }

            // Handle bmTags filter
            if (filter.bmTags && filter.bmTags.length > 0) {
                baseQueryParts.push('WITH bookmark', 'MATCH (bookmark)-[:HAS]->(tag:Tag)');
                baseQueryParts.push(`WHERE tag.id IN $bmTags`);
                baseQueryParts.push(`WITH DISTINCT bookmark`);
                queryParams.bmTags = filter.bmTags;
            }

            // Handle bmParentsTxt filter, considering bmLoose
            if (filter.bmParents && filter.bmParents.length > 0 && !filter.bmLoose) {
                baseQueryParts.push('MATCH (bookmark)<-[:CONTAINS*1..]-(p:Parent)');
                baseQueryParts.push(`WHERE p.id IN $bmParents`);
                baseQueryParts.push(`WITH DISTINCT bookmark`);
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