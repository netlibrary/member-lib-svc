import {ApolloServer, ApolloServerPlugin} from "@apollo/server";
import {Context} from "./apollo-neo4j/context.js";
import {InMemoryLRUCache} from "@apollo/utils.keyvaluecache";
import {graphqlUploadExpress} from "graphql-upload-ts";
import bodyParser from "body-parser";
import {expressMiddleware} from "@apollo/server/express4";
import express from "express";
import cors from 'cors';
import {ApolloServerPluginDrainHttpServer} from "@apollo/server/plugin/drainHttpServer";
import http from "http";

const myPlugin: ApolloServerPlugin = {
    async requestDidStart(requestContext) {
        return {
            // Fires whenever Apollo Server will parse a GraphQL
            // request to create its associated document AST.
            async parsingDidStart(requestContext) {
                console.log('Parsing started2!', requestContext.request);
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

export async function startApolloServer(schema, driver, ogm) {
    const app = express();
    const httpServer = http.createServer(app);
    const apolloServer = new ApolloServer<Context>({
        schema: schema,
        csrfPrevention: true,
        cache: new InMemoryLRUCache(),
        plugins: [
            ApolloServerPluginDrainHttpServer({httpServer}),
            myPlugin
        ],
    });

    await apolloServer.start();

    app.use(graphqlUploadExpress());

    const contextHandler = async ({req}) => {
        console.log('Request received:', req.body.query)
        return {
            ogm,
            driver,
            token: req.headers.authorization || ''
        };
    }

    app.use(
        '/graphql',
        cors<cors.CorsRequest>(),
        bodyParser.json(),
        expressMiddleware(apolloServer, {
            context: async ({req, res}) => ({
                memberId: req.headers.authorization || '',
                ogm: ogm,
                driver: driver,
                token: req.headers.authorization || ''
            })
        })
    )

    return {httpServer, apolloServer}
}