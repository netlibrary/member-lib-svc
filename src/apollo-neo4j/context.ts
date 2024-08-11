import {OGM} from "@neo4j/graphql-ogm";
import {Driver} from "neo4j-driver/types/driver.js";

export interface Context {
    ogm: OGM,
    driver: Driver,
    token: string
};