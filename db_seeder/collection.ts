import { ogm } from "../svc";
import { faker } from '@faker-js/faker';
import { memberIds } from "./member";

export let ogm_collections: any = []

export async function seedCollections() {
    const Collection = ogm.model('Collection')
    for (const memberId of memberIds) {
        try {
            ogm_collections = await Collection.create({
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
            console.log(`Collection created with ID: ${ogm_collections.collections[0].id}`);
        } catch (error: any) {
            console.error(`Error creating collection for Member ID ${memberId}: ${error.message}`);
        }
    }
}

