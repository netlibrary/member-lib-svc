import {Neo4jGraphQLAuthJWTPlugin} from "@neo4j/graphql-plugin-auth";
import dotenv from 'dotenv';

dotenv.config();


export const authPlugin = new Neo4jGraphQLAuthJWTPlugin({
    secret: process.env.JWT_SECRET || '',
    rolesPath: process.env.JWT_ROLES_PATH,
});