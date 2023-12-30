export const containerResolvers = {
  Query: {
    containerContent: async (_, { id: rootId, level }, { driver }) => {
      const session = driver.session();
      try {
        return await Query_DeepContainerContent(0, level, rootId, session);
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
  iconUri: ${alias}.iconUri
}`,
};

const CypherQuery = {
  ContentLvl1WithDeepBookmarkCount: `MATCH (c:Container {id: $id}) 
  MATCH (c)-[:HAS]->(cm:ContainerMeta)
  OPTIONAL MATCH (c)-[:CONTAINS]->(b:Bookmark)
  OPTIONAL MATCH (c)-[:CONTAINS]->(f:Folder)
  CALL {
    WITH f
    MATCH (f)-[:CONTAINS*0..]->(:Folder)-[:CONTAINS*0..]->(b:Bookmark)
    RETURN COUNT(DISTINCT b) AS bookmarkCount
  }
  WITH c, cm,
  COLLECT(DISTINCT CASE WHEN f IS NOT NULL THEN {id: f.id, name: f.name, bookmarkCount: bookmarkCount} END) AS folders, 
  COLLECT(DISTINCT CASE WHEN b IS NOT NULL THEN ${CypherSelection.Bookmark("b")} END) AS bookmarks
  RETURN { 
      folders: folders, 
      bookmarks: bookmarks,
      elementPositions: cm.elementPositions 
  } AS containerContent`,
  ContentLvl1: `MATCH (c:Container {id: $id}) 
  MATCH (c)-[:HAS]->(cm:ContainerMeta)
  OPTIONAL MATCH (c)-[:CONTAINS]->(b:Bookmark)
  OPTIONAL MATCH (c)-[:CONTAINS]->(f:Folder)
  WITH c, cm,
  COLLECT(DISTINCT CASE WHEN f IS NOT NULL THEN {id: f.id, name: f.name} END) AS folders, 
  COLLECT(DISTINCT CASE WHEN b IS NOT NULL THEN ${CypherSelection.Bookmark("b")} END) AS bookmarks
  RETURN { 
      folders: folders, 
      bookmarks: bookmarks,
      elementPositions: cm.elementPositions 
  } AS containerContent`,
};

async function Query_DeepContainerContent(
  currentLevel: number,
  totalLevels: number,
  containerId: any,
  session: any
) {
  const nextLevel = currentLevel + 1;
  let ogm_result: any = null;
  if (nextLevel == totalLevels) {
    ogm_result = await session.run(
      CypherQuery.ContentLvl1WithDeepBookmarkCount,
      { id: containerId }
    );
  } else {
    ogm_result = await session.run(CypherQuery.ContentLvl1, {
      id: containerId,
    });
  }
  const result = ogm_result!.records[0].get("containerContent");
  if (currentLevel == totalLevels) {
    return result;
  }
  for (let folder of result.folders) {
    const folderContent = await Query_DeepContainerContent(
      nextLevel,
      totalLevels,
      folder.id,
      session
    );
    Object.assign(folder, folderContent);
  }
  return result;
}
