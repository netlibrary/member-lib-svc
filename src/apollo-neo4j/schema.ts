import {Neo4jGraphQL} from "@neo4j/graphql";
import {driver} from "../db/driver.js";
import {resolvers} from "./resolvers/_resolvers.js";
import {typeDefs} from "../db/type-defs/_typeDefs.js";

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



