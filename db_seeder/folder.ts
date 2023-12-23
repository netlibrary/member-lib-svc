import { faker } from '@faker-js/faker';
import { ogm } from '../apollo-neo4j/ogm';
import { seedBookmarks } from './bookmark';
import { seedContainerMeta } from './meta';

export async function seedFolders(containerName, containerId, level = 0): Promise<[string]> {
    const ogm_Folder = ogm.model('Folder')
    const folderIds: any = []
    try {
        for (let i = 0; i < Math.floor(Math.random() * 2) + 2; i++) {
            const folderInput = {
                name: faker.company.name(), // Replace with actual name
                // No need to set createdAt and updatedAt, these are handled by the @timestamp directive
                // Set relationships if needed
                [containerName]: {
                    connect: { where: { node: { id: containerId } } }
                }
            };
            const ogm_folders_createRes = await ogm_Folder.create({
                input: folderInput
            });
            console.log(`Folder created with ID: ${ogm_folders_createRes.folders[0].id}`);
            let elementIds = await seedBookmarks("folder", ogm_folders_createRes.folders[0].id)
            console.log(`folder level: ${level}`)
            if (level <= Math.floor(Math.random() * 2) + 1) {
                const subFolderIds = await seedFolders("folder", ogm_folders_createRes.folders[0].id, ++level)
                elementIds = elementIds.concat(subFolderIds)
            }
            seedContainerMeta("folder", ogm_folders_createRes.folders[0].id, elementIds)
            folderIds.push(ogm_folders_createRes.folders[0].id)
        }
    } catch (error: any) {
        console.error(`Error creating folder for ${containerName} ID ${containerId}: ${error.message}`);
    } finally {
        return folderIds
    }
}
