import {ogm_MemberMeta, ogm_ParentMeta} from "../ogm";
import {MutationUpdateParentMetasArgs, ParentMeta, ParentMetaWhere} from "../gen/types";

const pushChildPosition = async (childId, parentId) => {
    const updateInput: MutationUpdateParentMetasArgs = {
        update: {
            childPositions_PUSH: childId,
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

const addChildPosition = async (childId, parentId, position) => {
    if (position == null) {
        await pushChildPosition(childId, parentId);
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
        childPositions.splice(position-1, 0, childId);

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
        const updatedCollectionPositions = parentMeta[0].collectionPositions.filter(collection => !childIds.includes(collection));
        await ogm_MemberMeta.update({
            where: {id: parentMeta[0].id},
            update: {collectionPositions: updatedCollectionPositions},
        });
    } else {
        // Handle case where MemberMeta object is not found
        throw new Error('ParentMeta not found for parentId: ' + parentId);
    }
}

export const ParentMetaSvc = {
    addChildPosition: addChildPosition,
    pushChildPosition: pushChildPosition,
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