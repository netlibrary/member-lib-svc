import {ParentsChildren, SelectedNodes} from "../gen/types";
import {ogm} from "../ogm";
import {ogm_Collection} from "./collection";
import {NodeSvc} from "../services/node";
import {MemberMetaSvc} from "../services/member_meta";
import {memberIds} from "../../db_seeder/member";
import {ParentMetaSvc} from "../services/parent_meta";
import {Session} from "neo4j-driver";

export const hierarchNodesResolvers = {
    ChildDl: {
        __resolveType(obj, context, info) {
            // Logic to determine the type
            if (obj.type == "folder") {
                return "FolderDl";
            } else {
                return "BookmarkDl";
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
                return nDeleted;
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
        nl_parentsChildren: async (_, {ids, level}, {driver}) => {
            const tx = await driver.session().beginTransaction();
            try {
                const res: ParentsChildren[] = [];
                for (const id of ids) {
                    const children = await Query_DeepParentChildren(0, level, id, tx);
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
  COLLECT(DISTINCT CASE WHEN b IS NOT NULL THEN ${CypherSelection.Bookmark(
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
  COLLECT(DISTINCT CASE WHEN b IS NOT NULL THEN ${CypherSelection.Bookmark(
        "b"
    )} END) AS bookmarks
  WITH cm, folders + bookmarks AS children
  UNWIND cm.childPositions AS pos
  WITH pos, [child IN children WHERE child.id = pos][0] AS sortedChild
  WITH COLLECT(sortedChild) AS sortedChildren
  RETURN sortedChildren
   AS children`,
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
