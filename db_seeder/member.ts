import { seedCollections } from "./collection.js";
import {seedUnsortedBms} from "./bookmark.js";
import {seedDriver} from "./_db_seeder.js";

const getMemberIds = () => [
    // 'f4e55dd4-b406-45b8-a407-6d686900b8c8',
    // 'f01dd195-0d6f-4790-b2d1-7d60b4ee9ab7',
    // '22406d52-394f-4f46-89a3-679bad22db86',
    '106f4203-2af4-46d6-9687-2047c3dcdf8a'
];
export { getMemberIds as memberIds };


export async function seedMembers() {
    const session = seedDriver.session();
    try {
        for (const id of getMemberIds()) {
            const result = await session.run(
                'CREATE (m:Member:DeleteCascade {id: $id}) RETURN m',
                { id: id }
            );
            console.log(`Member created with ID: ${id}`);
            await seedCollections(id)
            await seedUnsortedBms(id)
        }
    } finally {
        await session.close();
    }
}
