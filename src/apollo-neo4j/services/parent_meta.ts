import {MutationUpdateParentMetasArgs, ParentMeta, ParentMetaWhere} from "../gen/types.js";
import {OGM} from "@neo4j/graphql-ogm";


export const ParentMetaSvc = {
    create: async (parentId, childIds, ogm) => {
        const parentMeta = await ogm.model("ParentMeta").create({
            input: {
                childPositions: childIds,
                parent: {
                    connect: {where: {node: {id: parentId}}}
                }
            }
        });
        console.log(`ParentMeta created with ID: ${parentMeta.parentMetas[0].id}`);
    },
    pushChildPositions: async (childIds: string[], parentId, ogm) => {
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
        await ogm.model("ParentMeta").update(updateInput as any);
    },
    addChildPositions: async (childIds: string[], parentId, position, ogm: OGM) => {
        if (position == null) {
            await ParentMetaSvc.pushChildPositions(childIds, parentId, ogm);
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
        const currentParentMeta: ParentMeta[] = await ogm.model("ParentMeta").find({
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

            try {
                await ogm.model("ParentMeta").update(updateInput as any);
            } catch (error) {
                console.error("Error during update operation:", error);
            }
        } else {
            throw ('ParentMeta not found');
        }
    },
    getByParentId: async (parentId: string, ogm) => {
        const parentMetaWhere: ParentMetaWhere = {
            parentConnection: {
                node: {
                    id: parentId
                }
            }
        }
        const currentParentMeta: ParentMeta[] = await ogm.model("ParentMeta").find({
            where: parentMetaWhere as any,
        });
        return currentParentMeta[0] || null;
    },
    delChPositions: async (childIds: string[], parentId: string, ogm) => {
        const parentMeta = await ParentMetaSvc.getByParentId(parentId, ogm);
        if (parentMeta) {
            // Filter out the deleted collection IDs from collectionPositions
            const updatedChildPositions = parentMeta.childPositions.filter(child => !childIds.includes(child));
            await ogm.model("ParentMeta").update({
                where: {id: parentMeta.id},
                update: {childPositions: updatedChildPositions},
            });
        } else {
            console.log('ParentMeta not found for parentId: ' + parentId);
        }
    }
}
