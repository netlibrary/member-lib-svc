import {NodesToMove, ParentsChildren, SelectedNodes} from "../gen/types.js";
import {NodeSvc} from "../services/node.js";
import {MemberMetaSvc} from "../services/member_meta.js";
import {memberIds} from "../../../db_seeder/member.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import neo4j, {Transaction} from "neo4j-driver";
import {bm_CypherSel} from "./bookmark.js";

export const hierarchNodesResolvers = {
    ChildDl: {
        __resolveType(obj, context, info) {
            // Logic to determine the type
            console.log("ChildDl", obj)
            // Check if the object contains the key 'domainName'
            if ('domainName' in obj) {
                return "BookmarkDl";
            } else {
                return "FolderDl";
            }
        },
    },
    Child: {
        __resolveType(obj, context, info) {
            if (obj.someBookmarkProperty) {
                return "Bookmark";
            }

            if (obj.someFolderProperty) {
                return "Folder";
            }

            return null; // Or handle the error case
        },
    },
    Mutation: {
        deleteManyNodes: async (_, {nodes}: { nodes: SelectedNodes }, {driver}) => {
            const tx = await driver.session().beginTransaction();
            try {
                console.log("deleteManyNodes", nodes);
                const deleteCascadeIds = nodes.collectionIds
                for (const child of nodes.childs) {
                    deleteCascadeIds.push(...child.bookmarkIds)
                    deleteCascadeIds.push(...child.folderIds)
                }
                const nDeleted = await NodeSvc.deleteManyCascade(deleteCascadeIds, tx);
                await MemberMetaSvc.deleteCollectionPositions(memberIds[0], nodes.collectionIds)
                for (const childsWrapper of nodes.childs) {
                    await ParentMetaSvc.deleteChildPositions([...childsWrapper.bookmarkIds, ...childsWrapper.folderIds], childsWrapper.parentId)
                }
                await tx.commit()

                return nDeleted;
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },
        moveManyNodes: async (_, {nodes, destinationId, position}: {
            nodes: NodesToMove,
            destinationId: string | null,
            position: number | null
        }, {driver}) => {
            const tx: Transaction = await driver.session().beginTransaction();
            try {
                console.log("moveManyNodes", nodes, destinationId, position);
                if (destinationId == null) {
                    await NodeSvc.removeHierarch(nodes, tx)
                } else {
                    await NodeSvc.moveToDest(nodes, destinationId, position, memberIds[0], tx)
                }
                await tx.commit()
                return true
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },
    },
    Query: {
        parentChildren: async (_, {id: rootId, level}, {driver}) => {
            const tx = await driver.session().beginTransaction();
            try {
                return await Query_DeepParentChildren(1, level, rootId, tx);
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },
        parentsByFilter: async (_, {name: name, limit, offset}, {driver}) => {
            const tx = await driver.session().beginTransaction();
            try {
                const ogm_result = await tx.run(
                    CypherQuery.ParentsByFilter,
                    {name: name, limit: neo4j.int(limit), offset: neo4j.int(offset)}
                );
                const result = ogm_result!.records[0].get("parents");
                return result
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },
        nl_parentsChildren: async (_, {ids, level}, {driver}) => {
            const tx = await driver.session().beginTransaction();
            try {
                const res: ParentsChildren[] = [];
                for (const id of ids) {
                    const children = await Query_DeepParentChildren(1, level, id, tx);
                    res.push({id, children});
                }
                return res;
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },
        collectionsByBmIdsXBmCounts: async (_, {bmIds}, {driver}) => {
            const tx = await driver.session().beginTransaction();
            try {
                const query = `
                        MATCH (b:Bookmark) WHERE b.id IN $bmIds
                        OPTIONAL MATCH (p:Collection)-[:CONTAINS*]->(b)
                        WITH distinct p
                        OPTIONAL MATCH (p)-[:CONTAINS*]->(b2:Bookmark)
                        with p, COUNT(b2) as bmCount
                        with {id: p.id, bmCount: bmCount} as r
                        RETURN r
                        `
                const ogm_result = await tx.run(
                    query,
                    {bmIds: bmIds}
                );

                const result = ogm_result!.records[0].get("r");
                return result
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },
    },
};

const CypherSelection = {
    Bookmark: (alias: string) => `{
  id: ${alias}.id, 
  name: ${alias}.name, 
  domainName: ${alias}.domainName, 
  linkPath: ${alias}.linkPath, 
  urlScheme: ${alias}.urlScheme, 
  iconUri: ${alias}.iconUri, 
  type: "bookmark" 
}`,
    Folder: (alias: string) => `{
  id: ${alias}.id, 
  name: ${alias}.name, 
  type: "folder"
}`,
    FolderWithDeepBookmarkCount: (alias: string) => `{
  id: ${alias}.id, 
  name: ${alias}.name, 
  type: "folder",
  bookmarkCount: bookmarkCount,
  hasUnfetchedChildren: hasUnfetchedChildren
}`,
};

const CypherQuery = {
    ChildrenLvl1WithDeepBookmarkCount: `MATCH (c:Parent {id: $id}) 
  MATCH (c)-[:HAS]->(cm:ParentMeta)
  OPTIONAL MATCH (c)-[:CONTAINS]->(b:Bookmark)
  OPTIONAL MATCH (c)-[:CONTAINS]->(f:Folder)
  CALL {
    WITH f
    MATCH (f)-[:CONTAINS*0..]->(:Folder)-[:CONTAINS*0..]->(b:Bookmark)
    RETURN COUNT(DISTINCT b) AS bookmarkCount
  }
  CALL {
    WITH f
    OPTIONAL MATCH (f)-[:CONTAINS]->(child)
    RETURN COUNT(child) > 0 AS hasUnfetchedChildren
  }
  WITH c, cm,
  COLLECT(DISTINCT CASE WHEN f IS NOT NULL THEN ${CypherSelection.FolderWithDeepBookmarkCount(
        "f"
    )} END) AS folders, 
  COLLECT(DISTINCT CASE WHEN b IS NOT NULL THEN ${bm_CypherSel.BookmarkDl(
        "b"
    )} END) AS bookmarks
  WITH cm, folders + bookmarks AS children
  UNWIND cm.childPositions AS pos
  WITH pos, [child IN children WHERE child.id = pos][0] AS sortedChild
  WITH COLLECT(sortedChild) AS sortedChildren
  RETURN sortedChildren
   AS children`,

    ChildrenLvl1: `MATCH (c:Parent {id: $id}) 
  MATCH (c)-[:HAS]->(cm:ParentMeta)
  OPTIONAL MATCH (c)-[:CONTAINS]->(b:Bookmark)
  OPTIONAL MATCH (c)-[:CONTAINS]->(f:Folder)
  WITH c, cm,
  COLLECT(DISTINCT CASE WHEN f IS NOT NULL THEN ${CypherSelection.Folder(
        "f"
    )} END) AS folders, 
  COLLECT(DISTINCT CASE WHEN b IS NOT NULL THEN ${bm_CypherSel.BookmarkDl(
        "b"
    )} END) AS bookmarks
  WITH cm, folders + bookmarks AS children
  UNWIND cm.childPositions AS pos
  WITH pos, [child IN children WHERE child.id = pos][0] AS sortedChild
  WITH COLLECT(sortedChild) AS sortedChildren
  RETURN sortedChildren
   AS children`,
    ParentsByFilter: `MATCH (c:Parent)
    WHERE toLower(c.name) CONTAINS toLower($name)
    CALL {
        WITH c
        MATCH (c)-[:CONTAINS*]->(b:Bookmark)
        RETURN COUNT(DISTINCT b) AS bookmarkCount
    }
    OPTIONAL MATCH path = (parent:Parent)-[:CONTAINS*1..]->(c)
    WHERE toLower(parent.name) CONTAINS toLower($name)
    WITH c, bookmarkCount, parent, path
    ORDER BY length(path)
    WITH c, bookmarkCount, COLLECT(parent)[0] AS closestParent
    WITH {
        name: c.name,
        id: c.id, 
        bmCount: bookmarkCount,
        parentId: CASE WHEN closestParent IS NOT NULL THEN closestParent.id ELSE NULL END
    } as parent
    SKIP $offset LIMIT $limit
    WITH COLLECT(parent) AS parents
    
    RETURN parents`
};

async function Query_DeepParentChildren(
    currentLevel: number,
    totalLevels: number,
    parentId: any,
    session: any
) {
    const nextLevel = currentLevel + 1;
    let ogm_result: any = null;
    if (currentLevel == totalLevels) {
        ogm_result = await session.run(
            CypherQuery.ChildrenLvl1WithDeepBookmarkCount,
            {id: parentId}
        );
    } else {
        ogm_result = await session.run(CypherQuery.ChildrenLvl1, {
            id: parentId,
        });
    }
    const result = ogm_result!.records[0].get("children");
    if (currentLevel == totalLevels) {
        return result;
    }
    for (let child of result) {
        if (child.type != "folder") continue;
        const folderChildren = await Query_DeepParentChildren(
            nextLevel,
            totalLevels,
            child.id,
            session
        );
        child.children = folderChildren;
    }
    return result;
}