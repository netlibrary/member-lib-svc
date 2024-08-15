import {getOgm_MemberMeta} from "../../../global/ogm.js";
import {MutationUpdateParentMetasArgs, ParentMeta, ParentMetaWhere} from "../gen/types.js";

const deleteCollectionPositions = async (memberId: string, collectionIds: string[]) => {
    const memberMeta = await getOgm_MemberMeta().find({
        where: {
            member: {
                id: memberId
            }
        }
    });

    if (memberMeta && memberMeta.length > 0) {
        // Filter out the deleted collection IDs from collectionPositions
        const updatedCollectionPositions = memberMeta[0].collectionPositions.filter(collection => !collectionIds.includes(collection));
        await getOgm_MemberMeta().update({
            where: {id: memberMeta[0].id},
            update: {collectionPositions: updatedCollectionPositions},
        });
    } else {
        // Handle case where MemberMeta object is not found
        throw new Error('MemberMeta not found for memberId: ' + memberId);
    }
}

export const MemberMetaSvc = {
    deleteCollectionPositions: deleteCollectionPositions,
}