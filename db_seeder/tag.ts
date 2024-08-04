import {faker} from "@faker-js/faker";
import {seedOgm} from "./_db_seeder.js";

export const tagIds: string[] = [];

function connectTagToBookmark(bookmarkId: string) {
    const ogm_Tag = seedOgm.model('Tag')
    try {
        const tagId = tagIds[Math.floor(Math.random() * tagIds.length)]
        ogm_Tag.update({
            where: {id: tagId},
            connect: {bookmarks: {where: {node: {id: bookmarkId}}}}
        })
    } catch (error: any) {
        throw new Error(`Error connecting tag to bookmark with ID ${bookmarkId}: ${error.message}`);
    }
}

export async function seedTag(bookmarkId: string) {
    if (tagIds.length >= 10) {
        connectTagToBookmark(bookmarkId)
        return
    }
    const ogm_Tag = seedOgm.model('Tag')
    try {
        const tagInput = {
            description: faker.lorem.sentences(2), // Replace with actual description
            name: faker.commerce.productAdjective(), // Replace with actual name
            bookmarks: {
                connect: {where: {node: {id: bookmarkId}}}
            }
        };
        const ogm_tags_createRes = await ogm_Tag.create({
            input: tagInput
        });
        const tagId = ogm_tags_createRes.tags[0].id;
        console.log(`Tag created with ID: ${tagId}`);
        tagIds.push(tagId)
    } catch (error: any) {
        console.error(`Error creating tag for bmId ID ${bookmarkId}: ${error.message}`);
    }
}

export async function seedTags(bookmarkId: string) {
    try {
        for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
            await seedTag(bookmarkId)
        }
    } catch (error: any) {
        console.error(`Error creating bookmark for parent ID ${bookmarkId}: ${error.message}`);
    }
}