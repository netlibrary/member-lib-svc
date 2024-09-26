export const MemberMetaSvc = {
    delCollPositions: async (memberId, collIds: string[], tx) => {
        const query = `
            MATCH (:Member {id: $memberId})-->(mm:MemberMeta)
            SET mm.collectionPositions = [pos IN mm.collectionPositions WHERE NOT pos IN $collIds]
        `;

        const params = {
            memberId,
            collIds,
        };

        return await tx.run(query, params);
    },
    pushCollectionPositions: async (memberId, collectionIds: string[], parentId, tx) => {
        const query = `
            MATCH (:Member {id: $memberId})-->(mm:MemberMeta)
            WITH mm
            UNWIND $collectionIds AS collectionId
            WITH mm, collectionId
            WHERE NOT collectionId IN mm.collectionPositions
            WITH mm, COLLECT(collectionId) AS newCollectionIds
            SET mm.collectionPositions = mm.collectionPositions + newCollectionIds
        `;

        const params = {
            parentId,
            collectionIds,
            memberId
        };

        return await tx.run(query, params);
    },
    addCollectionPositions: async (memberId, collectionIds: string[], position, tx) => {
        const query = `
        MATCH (:Member {id: $memberId})-->(mm:MemberMeta)
        WITH mm, CASE
            WHEN mm.collectionPositions IS NULL THEN []
            ELSE mm.collectionPositions
        END AS currentPositions
        WITH mm, currentPositions, $insertIndex AS idx, $collectionIds AS newIds
        WITH mm, currentPositions, idx, newIds,
             CASE
                WHEN idx <= 0 THEN currentPositions + newIds
                WHEN idx >= SIZE(currentPositions) THEN currentPositions + newIds
                ELSE 
                    [i IN RANGE(0, SIZE(currentPositions) + SIZE(newIds) - 1) |
                        CASE
                            WHEN i < idx THEN currentPositions[i]
                            WHEN i < idx + SIZE(newIds) THEN newIds[i - idx]
                            ELSE currentPositions[i - SIZE(newIds)]
                        END
                    ]
             END AS updatedPositions
        SET mm.collectionPositions = updatedPositions
    `;

        const params = {
            memberId,
            collectionIds,
            insertIndex: position - 1
        };

        return await tx.run(query, params);
    },
}