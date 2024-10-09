import {collection_MUT_Resolvers} from "./collection_MUT.js";
import {collection_QUERY_Resolvers} from "./collection_QUERY.js";


export const collResolvers = {
    Mutation: collection_MUT_Resolvers,
    Query: collection_QUERY_Resolvers
};