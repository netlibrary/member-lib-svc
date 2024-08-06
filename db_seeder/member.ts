import {seedCollections} from "./collection.js";
import {seedLooseBms} from "./bookmark.js";
import {seedDriver} from "./_db_seeder.js";
import {memberIds} from "../global/vars.js";


export async function seedMembers() {
    const session = seedDriver.session();
    await session.run(
        'MATCH (n)\n' +
        'DETACH DELETE n'
    );
    try {
        for (const id of memberIds) {
            const result = await session.run(
                'CREATE (m:Member:DeleteCascade {id: $id}) RETURN m',
                { id: id }
            );
            console.log(`Member created with ID: ${id}`);
            await seedCollections(id)
            await seedLooseBms(id)
        }
    } finally {
        await session.close();
    }
}
