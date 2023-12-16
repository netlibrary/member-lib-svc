import { faker } from '@faker-js/faker';
import { ogm } from '../apollo-neo4j/ogm';
import { seedBookmarks } from './bookmark';
import { seedFolders } from './folder';
import { seedContainerMeta, seedMemberMeta } from './meta';

export async function seedCollections(memberId) {
    const ogm_Collection = ogm.model('Collection')
    try {
        const collectionIds: any = []
        for (let i = 0; i < 1; i++) {
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
            Promise.all([seedBookmarks("collection", ogm_collections_createRes.collections[0].id),
            seedFolders("collection", ogm_collections_createRes.collections[0].id)])
            .then(res => {
                const elementIds = [...res[0], ...res[1]]
                seedContainerMeta("collection", ogm_collections_createRes.collections[0].id, elementIds)
            })
            collectionIds.push(ogm_collections_createRes.collections[0].id)
        }
        seedMemberMeta(memberId, collectionIds)
    } catch (error: any) {
        console.error(`Error creating collection for Member ID ${memberId}: ${error.message}`);
    }

}

