import express from "express";
import {ogm} from "./apollo-neo4j/ogm";
import {neoSchema} from "./apollo-neo4j/schema"; // Assuming schema is defined in another file
import {graphqlUploadExpress} from "graphql-upload-ts";
import {ApolloServer, ApolloServerPlugin} from "@apollo/server";
import {Context} from "./apollo-neo4j/context";
import {ApolloServerPluginDrainHttpServer} from "@apollo/server/plugin/drainHttpServer";
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import {expressMiddleware} from '@apollo/server/express4';
import {driver} from "./apollo-neo4j/driver";
import {InMemoryLRUCache} from "@apollo/utils.keyvaluecache";


const myPlugin:ApolloServerPlugin  = {
    async requestDidStart(requestContext) {
        return {
            // Fires whenever Apollo Server will parse a GraphQL
            // request to create its associated document AST.
            async parsingDidStart(requestContext) {
                console.log('Parsing started!');
            },

            async executionDidStart(requestContext) {
                return {
                    willResolveField({source, args, contextValue, info}) {
                        const {fieldName, parentType} = info;
                        // console.log(`Resolving field: ${parentType.name}.${fieldName}`, source, args, context);
                        return (error, result) => {
                            if (error) {
                                console.error(`Error resolving field: ${error.message}`);
                            } else {
                                // console.log(`Field resolved: ${parentType.name}.${fieldName}, Result: ${JSON.stringify(result)}`);
                            }
                        };
                    },
                };
            },
            // Fires whenever Apollo Server will validate a
            // request's document AST against your GraphQL schema.

            async validationDidStart(requestContext) {
                console.log('Validation started!');
            },
        };
    },
};


async function startApolloServer() {
    const app = express();
    const httpServer = http.createServer(app);

    await Promise.all([neoSchema.getSchema(), ogm.init()])
        .then(async ([schema]) => {
            const server = new ApolloServer<Context>({
                schema: schema,
                csrfPrevention: true,
                cache: new InMemoryLRUCache(),
                plugins: [
                    ApolloServerPluginDrainHttpServer({httpServer}),
                    myPlugin
                ],
            });

            await server.start();

            app.use(graphqlUploadExpress());

            app.use(
                '/graphql',
                cors<cors.CorsRequest>(),
                bodyParser.json(),
                expressMiddleware(server, {
                    context: async ({req}) => ({token: req.headers.token, ogm: ogm, driver: driver}),
                })
            );

            await new Promise<void>((resolve) => httpServer.listen({port: 4000}, resolve));
            console.log(`🚀 Server ready at http://localhost:4000/graphql`);
        })
        .catch((error) => {
            console.error("Failed to get schema:", error);
        });
}

startApolloServer();