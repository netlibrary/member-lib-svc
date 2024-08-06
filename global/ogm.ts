import { OGM, Model } from '@neo4j/graphql-ogm';

let ogm_MemberMeta: Model | undefined;
let ogm_ParentMeta: Model | undefined;
let ogm_Bookmark: Model | undefined;
let ogm_Collection: Model | undefined;
let ogm_Folder: Model | undefined;

export function setOGMs(ogm: OGM) {
    ogm_MemberMeta = ogm.model("MemberMeta");
    ogm_ParentMeta = ogm.model("ParentMeta");
    ogm_Bookmark = ogm.model("Bookmark");
    ogm_Collection = ogm.model("Collection");
    ogm_Folder = ogm.model("Folder");
}

function getOgmModel(model: Model | undefined, modelName: string): Model {
    if (model === undefined) {
        throw new Error(`OGM for ${modelName} not set. Call setOGMs(ogm) first`);
    }
    return model;
}

export function getOgm_MemberMeta(): Model {
    return getOgmModel(ogm_MemberMeta, "MemberMeta");
}

export function getOgm_ParentMeta(): Model {
    return getOgmModel(ogm_ParentMeta, "ParentMeta");
}

export function getOgm_Bookmark(): Model {
    return getOgmModel(ogm_Bookmark, "Bookmark");
}

export function getOgm_Collection(): Model {
    return getOgmModel(ogm_Collection, "Collection");
}

export function getOgm_Folder(): Model {
    return getOgmModel(ogm_Folder, "Folder");
}