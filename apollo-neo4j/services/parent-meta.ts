import {ogm} from "../ogm";
import {MutationUpdateParentMetasArgs, ParentMeta, ParentMetaWhere} from "../gen/types";

const ParentMeta = ogm.model("ParentMeta");

export const pushChildPosition = async (childId, parentId) => {
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
    await ParentMeta.update(updateInput as any);
}

export const addChildPosition = async (childId, parentId, position) => {
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
    const currentParentMeta: ParentMeta[] = await ParentMeta.find({
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

        await ParentMeta.update(updateInput as any); // Use 'as any' cautiously
    } else {
        throw ('ParentMeta not found');
    }
}