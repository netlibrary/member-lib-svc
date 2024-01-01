import { faker } from '@faker-js/faker';
import { ogm } from '../apollo-neo4j/ogm';
import { seedBookmarks } from './bookmark';
import { seedFolders } from './folder';
import { seedParentMeta, seedMemberMeta } from './meta';

export async function seedCollections(memberId) {
    const ogm_Collection = ogm.model('Collection')
    try {
        const collectionIds: any = []
        for (let i = 0; i < 2; i++) {
            const ogm_collections_createRes = await ogm_Collection.create({
                input: {
                    name: faker.commerce.department(),
                    // Other properties like createdAt, updatedAt can be set here if required
                    member: {
                        connect: { where: { node: { id: memberId } } }
                    }
                }
            });
            console.log(`Collection created with ID: ${ogm_collections_createRes.collections[0].id}`);
            Promise.all([seedBookmarks(ogm_collections_createRes.collections[0].id),
            seedFolders(ogm_collections_createRes.collections[0].id)])
            .then(res => {
                const childIds = [...res[0], ...res[1]]
                seedParentMeta(ogm_collections_createRes.collections[0].id, childIds)
            })
            collectionIds.push(ogm_collections_createRes.collections[0].id)
        }
        seedMemberMeta(memberId, collectionIds)
    } catch (error: any) {
        console.error(`Error creating collection for Member ID ${memberId}: ${error.message}`);
    }
}

