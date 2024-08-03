
import { Neo4jGraphQL } from "@neo4j/graphql";
import { typeDefs } from "./type-defs/_typeDefs";
import { driver } from "./driver";
import { resolvers } from "./resolvers/_resolvers";

export const neoSchema = new Neo4jGraphQL({
    typeDefs,
    resolvers,
    driver,
    debug: true,
});



