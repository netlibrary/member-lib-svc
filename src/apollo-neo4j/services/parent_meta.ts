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
    pushChildPositions: async (memberId, childIds: string[], parentId, tx) => {
        const query = `
            MATCH (:Member {id: $memberId})-->(parent:Parent {id: $parentId})-->(pm:ParentMeta)
            WITH pm
            UNWIND $childIds AS childId
            WITH pm, childId
            WHERE NOT childId IN pm.childPositions
            WITH pm, COLLECT(childId) AS newChildIds
            SET pm.childPositions = pm.childPositions + newChildIds
        `;

        const params = {
            parentId,
            childIds,
            memberId
        };

        return await tx.run(query, params);
    },
    addChildPositions: async (memberId, childIds: string[], parentId, position, tx) => {
        if (position == null) {
            await ParentMetaSvc.pushChildPositions(memberId, childIds, parentId, tx);
            return;
        }

        const childPositions = await ChildPosSvc.getChildIds(memberId, parentId, tx)

        // Step 2: Insert childId at the specified position
        childPositions.splice(position - 1, 0, ...childIds);

        // await ogm.model("ParentMeta").update(updateInput as any);
        await tx.run("MATCH (p:Parent {id: $id})-->(pm:ParentMeta) SET pm.childPositions = $childPositions", {
            childPositions: childPositions,
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
    delChPositions: async (memberId, childIds: string[], parentId: string, tx) => {
        const query = `
            MATCH (:Member {id: $memberId})-->(:Parent {id: $parentId})-->(pm:ParentMeta)
            SET pm.childPositions = [pos IN pm.childPositions WHERE NOT pos IN $childIds]
        `;

        const params = {
            memberId,
            parentId,
            childIds,
        };

        return await tx.run(query, params);
    },
    delChPositions2: async (memberId, childIds: string[], tx) => {
        const query = `
            MATCH (:Member {id: $memberId})-->(:Child)-->(:Parent)-->(pm:ParentMeta)
            with distinct pm
            SET pm.childPositions = [pos IN pm.childPositions WHERE NOT pos IN $childIds]
        `;

        const params = {
            memberId,
            childIds,
        };

        return await tx.run(query, params);
    },
}
