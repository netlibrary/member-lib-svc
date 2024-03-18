import {faker} from '@faker-js/faker';
import {ogm} from '../apollo-neo4j/ogm';
import {seedFolders} from "./folder";
import {seedMemberMeta, seedParentMeta} from "./meta";
import {ogm_Bookmark} from "../apollo-neo4j/resolvers/bookmark";
import {seedTags} from "./tag";


export async function seedBookmarks(parentId): Promise<string[]> {
    const ogm_Bookmark = ogm.model('Bookmark')
    const bookmarkIds: any = []
    try {
        for (let i = 0; i < Math.floor(Math.random() * 2) + 2; i++) {
            const bookmarkId = await seedBm(parentId)
            if (!bookmarkId) throw new Error('err creating bookmark')
            bookmarkIds.push(bookmarkId)
        }
    } catch (error: any) {
        console.error(`Error creating bookmark for parent ID ${parentId}: ${error.message}`);
    } finally {
        return bookmarkIds
    }
}

export async function seedNonHierarchBms(memberId) {
    const ogm_BMsCont = ogm.model('BmsContainer')
    try {
        const ogm_bmsCont_createRes = await ogm_BMsCont.create({
            input: {
                // Other properties like createdAt, updatedAt can be set here if required
                member: {
                    connect: {where: {node: {id: memberId}}}
                }
            }
        });
        const contId = ogm_bmsCont_createRes.bmsContainers[0].id
        console.log(`bms cont created with ID: ${contId}`);
        for (let i = 0; i < Math.floor(Math.random() * 2) + 2; i++) {
            const bookmarkId = await seedBm(contId)
            if (!bookmarkId) throw new Error('err creating bookmark')
            console.log(`Bookmark created with ID: ${bookmarkId}`);
        }
    } catch (error: any) {
        console.error(`Error creating collection for Member ID ${memberId}: ${error.message}`);
    }
}

export async function seedBm(parentId): Promise<string> {
    const ogm_Bookmark = ogm.model('Bookmark')
    let bookmarkId: any = null
    try {
        const bookmarkInput = {
            description: faker.lorem.sentences(2), // Replace with actual description
            name: faker.company.catchPhrase(), // Replace with actual name
            domainName: faker.internet.domainName(), // Replace with actual domain name
            urlScheme: "https", // Replace with actual URL scheme
            linkPath: faker.internet.domainWord(), // Replace with actual link path
            parent: {
                connect: {where: {node: {id: parentId}}}
            }
        };
        const ogm_bookmarks_createRes = await ogm_Bookmark.create({
            input: bookmarkInput
        });
        bookmarkId = ogm_bookmarks_createRes.bookmarks[0].id;
        console.log(`Bookmark created with ID: ${bookmarkId}`);

        await seedTags(bookmarkId)
    } catch (error: any) {
        console.error(`Error creating bookmark for parent ID ${parentId}: ${error.message}`);
    } finally {
        return bookmarkId
    }
}

