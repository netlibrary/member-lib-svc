import {seedCollections} from "./collection.js";
import {seedLooseBms} from "./bookmark.js";
import {seedDriver, seedOgm} from "./_db_seeder.js";
import {memberIds} from "../global/vars.js";
import {MemberSvc_Ogm} from "../src/apollo-neo4j/services/member_ogm.js";


export async function seedMembers() {
    const session = seedDriver.session();
    try {
        for (const id of memberIds) {
            // const result = await session.run(
            //     'CREATE (m:Member:DeleteCascade {id: $id, memberName: $memberName, password: $password}, roles: ["MEMBER"]) RETURN m',
            //     {id: id, memberName: `member${id}`, password: `hallo`}
            // );
            // console.log(`Member created with ID: ${id}`);

            const member = await MemberSvc_Ogm.create(
                `testmember`,
                "hallo"
                , seedOgm);

            await session.run(
                `
            MATCH (m:Member {id: $currentId})
            SET m.id = $newId
            RETURN m
            `, {currentId: member.id, newId: id}
            );

            await seedCollections(id)
            await seedLooseBms(id)
        }
    } catch (e) {
        console.error(e);
    } finally {
        await session.close();
    }
}
