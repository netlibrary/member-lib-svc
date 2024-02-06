import { ogm } from "../ogm";

export const ogm_Collection = ogm.model("Collection");

export const collectionResolvers = {
  Mutation: {
    createCollection: async (_, { name, memberId }, { driver }) => {
      const t = 0
      try {
        const collection = await ogm_Collection.create({
          input: {
            name: name,
            member: {
              connect: { where: { node: { id: memberId } } },
            },
          },
        });
        const collectionId = collection.collections[0].id
        console.log(
          `Collection created with ID: ${collectionId}`
        );
        const MemberMeta = ogm.model("MemberMeta");
        await MemberMeta.update({
          update: {
            collectionPositions_PUSH: collectionId,
          },
          where: {
            member: {
              id: memberId,
            },
          },
        });
        return collectionId;
      } catch (error) {
        throw error;
      }
    },
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
