import {Transaction} from "neo4j-driver";
import {CollChildType} from "../../models/coll.js";

export const ChildPosSvc = {
    getPrefixedId: (id: string, type = IdType.Bookmark) => {
        return `${type}:${id}`
    },
    getAllBmIds: async (memberId: string, tx: Transaction): Promise<string[]> => {
        return (await tx.run(`
                    MATCH (m:Member {id: $memberId})-[*1..]->(pm:ParentMeta)
                    WITH DISTINCT pm
                    UNWIND pm.childPositions AS childPos
                    with childPos
                    WHERE childPos STARTS WITH 'b:'
                    RETURN COLLECT(childPos) AS r
                `, {memberId: memberId})).records[0].get('r')
    },
    getChildIds: async (memberId: string, parentId, childType: CollChildType | null = null, tx: Transaction): Promise<string[]> => {
        return (await tx.run(`
                    MATCH (m:Member {id: $memberId})-[*1..]->(:Parent {id: $parentId})-->(pm:ParentMeta)
                    WITH DISTINCT pm
                    UNWIND pm.childPositions AS childPos
                    WITH childPos
                    ${childType ? "WHERE childPos STARTS WITH '" + childType + ":'" : ""}
                    RETURN collect(childPos) AS r
                `, {memberId: memberId, parentId})).records[0].get('r')
    },
}

export enum IdType {
    Bookmark = 'b',
    Folder = 'f'
}

type PrefixedId = `${IdType}:${string}`;

export class ChildIdList {
    private items: PrefixedId[];

    constructor(rawIds: string[], defaultType: IdType = IdType.Bookmark) {
        this.items = rawIds.map(id => `${defaultType}:${id}`) as PrefixedId[];
    }

    addFolderIds(folderIds: string[]): void {
        const newFolderItems = folderIds.map(id => `${IdType.Folder}:${id}` as PrefixedId);
        this.items.push(...newFolderItems);
    }

    addBookmarkIds(bookmarkIds: string[]): void {
        const newBookmarkItems = bookmarkIds.map(id => `${IdType.Bookmark}:${id}` as PrefixedId);
        this.items.push(...newBookmarkItems);
    }

    includes(id: string): boolean {
        return this.items.includes(id as PrefixedId);
    }

    getItems(): string[] {
        return this.items;
    }
}