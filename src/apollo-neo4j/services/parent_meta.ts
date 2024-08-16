import {MutationUpdateParentMetasArgs, ParentMeta, ParentMetaWhere} from "../gen/types.js";
import {OGM} from "@neo4j/graphql-ogm";
import {ChildPosSvc} from "./child_pos.js";
import {CollChildType} from "../../models/coll.js";


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
    addChildPositions: async (memberId, childIds: string[], parentId, position, ogm: OGM, tx) => {
        if (position == null) {
            await ParentMetaSvc.pushChildPositions(childIds, parentId, ogm);
            return;
        }

        const folderPositions = await ChildPosSvc.getChildIds(memberId, parentId, CollChildType.Folder, tx)

        // Step 2: Insert childId at the specified position
        folderPositions.splice(position - 1, 0, ...childIds);

        // await ogm.model("ParentMeta").update(updateInput as any);
        await tx.run("MATCH (p:Parent {id: $id})-->(pm:ParentMeta) SET pm.childPositions = $childPositions", {
            childPositions: folderPositions,
            id: parentId
        });
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
