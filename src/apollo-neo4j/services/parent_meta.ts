import {MutationUpdateParentMetasArgs, ParentMeta, ParentMetaWhere} from "../gen/types.js";
import {getOgm_ParentMeta} from "../../../global/ogm.js";

const pushChildPosition = async (childIds: string[], parentId) => {
    const updateInput: MutationUpdateParentMetasArgs = {
        update: {
            childPositions_PUSH: childIds,
        },
        where: {
            parentConnection: {
                node: {
                    id: parentId
                }
            }
        }
    };
    await getOgm_ParentMeta().update(updateInput as any);
}

const addChildPositions = async (childIds, parentId, position) => {
    if (position == null) {
        await pushChildPosition(childIds, parentId);
        return;
    }

    // Step 1: Fetch the current ParentMeta including childPositions
    const parentMetaWhere: ParentMetaWhere = {
        parentConnection: {
            node: {
                id: parentId
            }
        }
    }
    const currentParentMeta: ParentMeta[] = await getOgm_ParentMeta().find({
        where: parentMetaWhere as any,
    });

    if (currentParentMeta && currentParentMeta[0]) {
        let childPositions = currentParentMeta[0].childPositions || [];

        // Step 2: Insert childId at the specified position
        childPositions.splice(position - 1, 0, ...childIds);

        // Step 3: Update the ParentMeta with the new childPositions array
        const updateInput: MutationUpdateParentMetasArgs = {
            where: {id: currentParentMeta[0].id},
            update: {
                childPositions: childPositions,
            },
        };

        await getOgm_ParentMeta().update(updateInput as any); // Use 'as any' cautiously
    } else {
        throw ('ParentMeta not found');
    }
}

export const deleteChildPositions = async (childIds: string[], parentId: string) => {
    const parentMeta = await getParentMeta(parentId);
    if (parentMeta) {
        // Filter out the deleted collection IDs from collectionPositions
        const updatedChildPositions = parentMeta.childPositions.filter(child => !childIds.includes(child));
        await getOgm_ParentMeta().update({
            where: {id: parentMeta.id},
            update: {childPositions: updatedChildPositions},
        });
    } else {
        console.log('ParentMeta not found for parentId: ' + parentId);
    }
}

export const ParentMetaSvc = {
    addChildPositions: addChildPositions,
    pushChildPositions: pushChildPosition,
    deleteChildPositions: deleteChildPositions
}

const getParentMeta = async (parentId: string) => {
    const parentMetaWhere: ParentMetaWhere = {
        parentConnection: {
            node: {
                id: parentId
            }
        }
    }
    const currentParentMeta: ParentMeta[] = await getOgm_ParentMeta().find({
        where: parentMetaWhere as any,
    });
    return currentParentMeta[0] || null;
}

export async function createParentMeta(parentId, childIds) {
    const parentMeta = await getOgm_ParentMeta().create({
        input: {
            childPositions: childIds,
            parent: {
                connect: {where: {node: {id: parentId}}}
            }
        }
    });
    console.log(`ParentMeta created with ID: ${parentMeta.parentMetas[0].id}`);
}