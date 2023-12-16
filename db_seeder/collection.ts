import { faker } from '@faker-js/faker';
import { ogm } from '../apollo-neo4j/ogm';
import { memberIds } from "./member";

export let ogm_collections_createRes: any = []

export async function seedCollections() {
    const ogm_Collection = ogm.model('Collection')
    for (const memberId of memberIds) {
        try {
            ogm_collections_createRes = await ogm_Collection.create({
                input: [{
                    name: faker.commerce.department(),
                    // Other properties like createdAt, updatedAt can be set here if required
                    member: {
                        connect: { where: { node: { id: memberId } } }
                    }
                }, {
                    name: faker.commerce.department(),
                    // Other properties like createdAt, updatedAt can be set here if required
                    member: {
                        connect: { where: { node: { id: memberId } } }
                    }
                }, {
                    name: faker.commerce.department(),
                    // Other properties like createdAt, updatedAt can be set here if required
                    member: {
                        connect: { where: { node: { id: memberId } } }
                    }
                }]
            });
            console.log(`Collection created with ID: ${ogm_collections_createRes.collections[0].id}`);
        } catch (error: any) {
            console.error(`Error creating collection for Member ID ${memberId}: ${error.message}`);
        }
    }
}

