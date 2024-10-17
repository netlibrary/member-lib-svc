import {OGM} from "../wrapper.js"
import {driver} from "./driver.js";
import {typeDefs} from "./type-defs/_typeDefs.js";

export const ogm = new OGM({ typeDefs, driver });

export const ogm_Bookmark = ogm.model("Bookmark");