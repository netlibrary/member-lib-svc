import express from "express";
import {ogm} from "./apollo-neo4j/ogm.js";
import {neoSchema} from "./apollo-neo4j/schema.js"; // Assuming schema is defined in another file
import http from 'http';
import {driver} from "./apollo-neo4j/driver.js";
import {createApolloServer} from "./apollo_server.js";


async function startApolloServer() {
    const [schema] = await Promise.all([neoSchema.getSchema(), ogm.init()]);
    try {
        const {httpServer, apolloServer} = await createApolloServer(schema, driver, ogm);
        await new Promise<void>((resolve) => httpServer.listen({port: 4000}, resolve));
        console.log(`🚀 Server ready at http://localhost:4000/graphql`);
    } catch (error) {
        console.error("Failed to get schema:", error);
    }
}

startApolloServer();