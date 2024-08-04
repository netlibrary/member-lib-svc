import {OGM} from "../wrapper.js"
import { driver } from "./driver.js";
import { typeDefs } from "./type-defs/_typeDefs.js";

export const ogm = new OGM({ typeDefs, driver });

export const ogm_MemberMeta = ogm.model("MemberMeta");
export const ogm_ParentMeta = ogm.model("ParentMeta");
export const ogm_Bookmark = ogm.model("Bookmark");