import { OGM } from "@neo4j/graphql-ogm";
import { driver } from "./driver";
import { typeDefs } from "./type-defs/_typeDefs";

export const ogm = new OGM({ typeDefs, driver });