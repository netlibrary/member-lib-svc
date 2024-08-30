import {Neo4jGraphQL} from "@neo4j/graphql";
import {typeDefs} from "./type-defs/_typeDefs.js";
import {driver} from "./driver.js";
import {resolvers} from "./resolvers/_resolvers.js";

export const neoSchema = new Neo4jGraphQL({
    typeDefs,
    resolvers,
    driver,
    debug: true,
    features: {
        authorization: {
            key: "your-256-bit-secret",
        },

    },
});



