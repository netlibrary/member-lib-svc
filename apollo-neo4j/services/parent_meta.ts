import {ogm_MemberMeta, ogm_ParentMeta} from "../ogm";
import {MutationUpdateParentMetasArgs, ParentMeta, ParentMetaWhere} from "../gen/types";

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
    await ogm_ParentMeta.update(updateInput as any);
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
    const currentParentMeta: ParentMeta[] = await ogm_ParentMeta.find({
        where: parentMetaWhere as any,
    });

    if (currentParentMeta && currentParentMeta[0]) {
        let childPositions = currentParentMeta[0].childPositions || [];

        // Step 2: Insert childId at the specified position
        childPositions.splice(position-1, 0, ...childIds);

        // Step 3: Update the ParentMeta with the new childPositions array
        const updateInput: MutationUpdateParentMetasArgs = {
            where: {id: currentParentMeta[0].id},
            update: {
                childPositions: childPositions,
            },
        };

        await ogm_ParentMeta.update(updateInput as any); // Use 'as any' cautiously
    } else {
        throw ('ParentMeta not found');
    }
}

const deleteChildPositions = async (childIds: string[], parentId: string) => {
    const parentMeta = await getParentMeta(parentId);
    if (parentMeta) {
        // Filter out the deleted collection IDs from collectionPositions
        const updatedChildPositions = parentMeta.childPositions.filter(child => !childIds.includes(child));
        await ogm_ParentMeta.update({
            where: {id: parentMeta.id},
            update: {childPositions: updatedChildPositions},
        });
    } else {
        // Handle case where MemberMeta object is not found
        throw new Error('ParentMeta not found for parentId: ' + parentId);
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
    const currentParentMeta: ParentMeta[] = await ogm_ParentMeta.find({
        where: parentMetaWhere as any,
    });
    return currentParentMeta[0] || null;
}