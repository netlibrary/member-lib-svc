import { faker } from '@faker-js/faker';
import { ogm } from '../apollo-neo4j/ogm';
import { ogm_collections_createRes } from "./collection";


export async function seedBookmarks(containerConn) {
    const ogm_Bookmark = ogm.model('Bookmark')
    for (const ogm_collection_createRes of ogm_collections_createRes.collections) {
        try {
            for (let i = 0; i < Math.floor(Math.random() * 3) + 3; i++) {
                const ogm_bookmarks_createRes = await ogm_Bookmark.create({
                    input: {
                        createdAt: new Date().toISOString(), // Assuming current date-time
                        updatedAt: new Date().toISOString(), // Assuming current date-time
                        description: faker.lorem.sentences(2), // Replace with actual description
                        title: faker.company.catchPhrase, // Replace with actual title
                        domainName: faker.internet.domainName(), // Replace with actual domain name
                        urlScheme: "https", // Replace with actual URL scheme
                        linkPath: faker.internet.domainWord(), // Replace with actual link path
                        // Define folder and collection if needed
                        // folder: { /* your folder data */ },
                        // collection: { /* your collection data */ },
                        ...containerConn // Add additional properties from containerConn
                    }
                });
                console.log(`Collection created with ID: ${ogm_collections_createRes.collections[0].id}`);
            }

        } catch (error: any) {
            console.error(`Error creating collection for Member ID ${ogm_collection_createRes}: ${error.message}`);
        }
    }
}

