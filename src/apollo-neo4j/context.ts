import {OGM} from "@neo4j/graphql-ogm";
import {Driver} from "neo4j-driver/types/driver.js";

export interface Context {
    driver: Driver;
    ogm: OGM;
    token: string;
    isTest: boolean;
};