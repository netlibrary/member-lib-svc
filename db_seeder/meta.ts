import { ogm } from "../apollo-neo4j/ogm";

export async function seedMemberMeta(memberId, collectionIds) {
    const MemberMeta = ogm.model('MemberMeta')

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

export async function seedContainerMeta(containerName, containerId, elementIds) {
    const ContainerMeta = ogm.model('ContainerMeta')
    const containerMeta = await ContainerMeta.create({
        input: {
            elementPositions: elementIds,
            [containerName]: {
                connect: { where: { node: { id: containerId } } }
            }
        }
    });
    console.log(`ContainerMeta created with ID: ${containerMeta.containerMetas[0].id}`);
}