
import { Neo4jGraphQL } from "@neo4j/graphql";
import { typeDefs } from "./type-defs/typeDefs";
import { driver } from "./driver";
import { resolvers } from "./resolvers/_resolvers";

export const neoSchema = new Neo4jGraphQL({
    typeDefs,
    resolvers,
    driver
});



