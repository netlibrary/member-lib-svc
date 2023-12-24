export const collectionResolvers = {
  Mutation: {
    // deleteCollection: async (_, { id }, { driver }) => {
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
