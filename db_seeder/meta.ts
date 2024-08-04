import {seedOgm} from "./_db_seeder.js";

export async function seedMemberMeta(memberId, collectionIds) {
    const MemberMeta = seedOgm.model('MemberMeta')

    const memberMeta = await MemberMeta.create({
        input: {
            collectionPositions: collectionIds,
            member: {
                connect: { where: { node: { id: memberId } } }
            }
        }
    });
    console.log(`MemberMeta created with ID: ${memberMeta.memberMetas[0].id}`);
}

export async function seedParentMeta(parentId, childIds) {
    const ParentMeta = seedOgm.model('ParentMeta')
    const parentMeta = await ParentMeta.create({
        input: {
            childPositions: childIds,
            parent: {
                connect: { where: { node: { id: parentId } } }
            }
        }
    });
    console.log(`ParentMeta created with ID: ${parentMeta.parentMetas[0].id}`);
}