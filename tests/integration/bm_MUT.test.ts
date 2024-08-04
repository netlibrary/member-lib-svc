import {typeDefs} from "../../src/apollo-neo4j/type-defs/_typeDefs.js";
import {describe} from "node:test";
import {resolvers} from "../../src/apollo-neo4j/resolvers/_resolvers.js";
import {ApolloServer} from "@apollo/server";
import express from "express";
import * as http from "http";
import {testDriver} from "../helpers/driver.js";
import {ApolloServerPluginDrainHttpServer} from "@apollo/server/plugin/drainHttpServer";

// Define your context type
type MyContext = {
    driver: typeof testDriver;
};

describe('Bookmark Mutations', () => {
    let testServer: ApolloServer<MyContext>;
    let mutate: any;

    const app = express();

    const httpServer = http.createServer(app);
    beforeAll(async () => {
        // Set up test database connection

        testServer = new ApolloServer<MyContext>({
            typeDefs,
            resolvers,
            plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],

        });

        await testServer.start();
    });

    afterAll(async () => {
        await testServer.stop();
        await testDriver.close();
    });

    it('should delete all bookmarks', async () => {
        const DELETE_ALL_BMS = `
      mutation {
        deleteAllBms
      }
    `;

        const response = await testServer.executeOperation({
                query: DELETE_ALL_BMS,
                variables: {driver: testDriver},
            },
        );

        expect(response.body.kind).toBe('single');
        // Additional checks on the database state
    });
});