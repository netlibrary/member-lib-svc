export const containerResolvers = {
  Query: {
    containerContent: async (_, { id, level }, { driver }) => {
      const session = driver.session();
      try {
        const result = await session.run(
          `MATCH (c:Container {id: $id})
          OPTIONAL MATCH (c)-[:CONTAINS*0..${level}]->(f:Folder)
          OPTIONAL MATCH (f)-[:CONTAINS]->(b:Bookmark)
          OPTIONAL MATCH (f)-[:CONTAINER_META]->(cm:ContainerMeta)
          WITH c, f, cm, COLLECT(DISTINCT b) AS folderBookmarks
          OPTIONAL MATCH (c)-[:CONTAINS]->(b2:Bookmark)
          RETURN {
            folders: COLLECT(DISTINCT {
              id: f.id,
              name: f.name, 
              elementPositions: cm.elementPositions, 
              bookmarks: folderBookmarks
            }),
            bookmarks: COLLECT(DISTINCT b2)
          } AS containerContent`,
          { id }
        );

        const containerContent = result.records[0].get("containerContent");

        return containerContent;
      } catch (error) {
        throw error;
      } finally {
        await session.close();
      }
    },
  },
};
