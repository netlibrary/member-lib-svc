export const collectionTreeResolvers = {
  ChildrenDd1: {
    __resolveType(obj, context, info) {
      // Logic to determine the type
      if (obj.type == "folder") {
        return "FolderDs1";
      } else {
        return "BookmarkDd1";
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
  Query: {
    parentChildren: async (_, { id: rootId, level }, { driver }) => {
      const session = driver.session();
      try {
        return await Query_DeepParentChildren(0, level, rootId, session);
      } catch (error) {
        throw error;
      } finally {
        await session.close();
      }
    },
  },
};

const CypherSelection = {
  Bookmark: (alias: string) => `{
  id: ${alias}.id, 
  title: ${alias}.title, 
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
  bookmarkCount: bookmarkCount
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
  RETURN { 
    children: sortedChildren
  } AS parentChildren`,

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
  RETURN { 
      children: sortedChildren
  } AS parentChildren`,
};

async function Query_DeepParentChildren(
  currentLevel: number,
  totalLevels: number,
  parentId: any,
  session: any
) {
  const nextLevel = currentLevel + 1;
  let ogm_result: any = null;
  if (nextLevel == totalLevels) {
    ogm_result = await session.run(
      CypherQuery.ChildrenLvl1WithDeepBookmarkCount,
      { id: parentId }
    );
  } else {
    ogm_result = await session.run(CypherQuery.ChildrenLvl1, {
      id: parentId,
    });
  }
  const result = ogm_result!.records[0].get("parentChildren");
  if (currentLevel == totalLevels) {
    return result;
  }
  for (let child of result.children) {
    if (child.type != "folder") continue;
    const folderChildren = await Query_DeepParentChildren(
      nextLevel,
      totalLevels,
      child.id,
      session
    );
    Object.assign(child, folderChildren);
  }
  return result;
}
