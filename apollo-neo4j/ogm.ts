import { OGM } from "@neo4j/graphql-ogm";
import { driver } from "./driver";
import { typeDefs } from "./type-defs/typeDefs";

export const ogm = new OGM({ typeDefs, driver });