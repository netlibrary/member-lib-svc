import { faker } from '@faker-js/faker';
import { ogm } from '../apollo-neo4j/ogm';


export async function seedBookmarks(parentId): Promise<string[]> {
    const ogm_Bookmark = ogm.model('Bookmark')
    const bookmarkIds: any = []
    try {
        for (let i = 0; i < Math.floor(Math.random() * 2) + 2; i++) {
            const bookmarkInput = {
                description: faker.lorem.sentences(2), // Replace with actual description
                title: faker.company.catchPhrase(), // Replace with actual title
                domainName: faker.internet.domainName(), // Replace with actual domain name
                urlScheme: "https", // Replace with actual URL scheme
                linkPath: faker.internet.domainWord(), // Replace with actual link path
                parent: {
                    connect: { where: { node: { id: parentId } } }
                }
            };
            const ogm_bookmarks_createRes = await ogm_Bookmark.create({
                input: bookmarkInput
            });
            console.log(`Bookmark created with ID: ${ogm_bookmarks_createRes.bookmarks[0].id}`);
            bookmarkIds.push(ogm_bookmarks_createRes.bookmarks[0].id)
        }
    } catch (error: any) {
        console.error(`Error creating bookmark for parent ID ${parentId}: ${error.message}`);
    } finally {
        return bookmarkIds
    }
}

