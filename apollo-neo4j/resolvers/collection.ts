export const collectionResolvers = {
    Query: {
        getCollectionDeep: async (_, { id }, { driver }) => {
            const session = driver.session();
            try {
                const result = await session.run(
                    `MATCH (n{ id: $id })
                OPTIONAL MATCH (n)-[r*]->(m)
                RETURN n, r, m`
                    , { id });

                return result.records.map(record => ({
                    id: record.get('id'),
                    name: record.get('name'),
                    // containerMeta: {
                    //     elementPositions: record.get('elementPositions'),
                    // },
                    // bookmarks: record.get('bookmarks'),
                    // folders: record.get('folders'),
                }))[0]; // Assuming ID is unique and only one record is expected
            } catch (error) {
                throw error;
            } finally {
                await session.close();
            }
        },
    }
};