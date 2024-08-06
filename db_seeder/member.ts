import {seedCollections} from "./collection.js";
import {seedUnsortedBms} from "./bookmark.js";
import {seedDriver} from "./_db_seeder.js";
import {memberIds} from "../global/vars.js";


export async function seedMembers() {
    const session = seedDriver.session();
    try {
        for (const id of memberIds) {
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
