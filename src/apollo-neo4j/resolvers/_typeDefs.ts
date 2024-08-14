import {gql} from "graphql-tag";
import {member_QUERY_typeDefs} from "./member_QUERY.js";

export const resolver_typeDefs = gql`
    ${member_QUERY_typeDefs}
`