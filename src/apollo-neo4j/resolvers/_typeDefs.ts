import {gql} from "graphql-tag";
import {member_QUERY_typeDefs} from "./member_QUERY.js";
import {bm_MUT_typeDefs} from "./bm_MUT.js";
import {bmLoose_MUT_typeDefs} from "./bmLoose_MUT.js";
import {collection_QUERY_typeDefs} from "./collection_QUERY.js";
import {collection_MUT_typeDefs} from "./collection_MUT.js";
import {collNodes_MUT_typeDefs} from "./collNodes_MUT.js";
import {folder_MUT_typeDefs} from "./folder.js";
import {tag_QUERY_typeDefs} from "./tag_QUERY.js";
import {collNodes_QUERY_typeDefs} from "./collNodes_QUERY.js";
import {bmColl_MUT_typeDefs} from "./bmColl_MUT.js";

export const resolver_typeDefs = gql`
    ${member_QUERY_typeDefs}
    ${collection_QUERY_typeDefs}
    ${bm_MUT_typeDefs}
    ${bmLoose_MUT_typeDefs}
    ${bmColl_MUT_typeDefs}
    ${collection_MUT_typeDefs}
    ${collNodes_MUT_typeDefs}
    ${collNodes_QUERY_typeDefs}
    ${folder_MUT_typeDefs}
    ${tag_QUERY_typeDefs}
`