import { OGM } from "@neo4j/graphql-ogm";
import { driver } from "./driver";
import { typeDefs } from "./type-defs/_typeDefs";

export const ogm = new OGM({ typeDefs, driver });

export const ogm_MemberMeta = ogm.model("MemberMeta");
export const ogm_ParentMeta = ogm.model("ParentMeta");
export const ogm_Bookmark = ogm.model("Bookmark");