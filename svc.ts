import { ApolloServer } from "apollo-server-express";
import express from "express";
import { driver } from "./apollo-neo4j/driver";
import { ogm } from "./apollo-neo4j/ogm";
import { neoSchema } from "./apollo-neo4j/schema"; // Assuming schema is defined in another file
import { graphqlUploadExpress } from "graphql-upload-ts";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";


const myPlugin = {

  // Fires whenever a GraphQL request is received from a client.

  async requestDidStart(requestContext) {



    return {

      // Fires whenever Apollo Server will parse a GraphQL

      // request to create its associated document AST.

      async parsingDidStart(requestContext) {

        console.log('Parsing started!');

      },

      async executionDidStart(requestContext) {
        return {
          willResolveField({ source, args, context, info }) {
            const { fieldName, parentType } = info;
            console.log(`Resolving field: ${parentType.name}.${fieldName}`, source, args, context);
            return (error, result) => {
              if (error) {
                console.error(`Error resolving field: ${error.message}`);
              } else {
                console.log(`Field resolved: ${parentType.name}.${fieldName}, Result: ${JSON.stringify(result)}`);
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



Promise.all([neoSchema.getSchema(), ogm.init()])
  .then(async ([schema]) => {
    const server = new ApolloServer({
      schema: schema,
      csrfPrevention: true,
      cache: "bounded",
      plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true }), myPlugin],
      context: ({ req }) => {
        return {
          ogm,
          driver,
        };
      },
    });
    await server.start();
    const app = express();
    // app.use(morgan("combined"));
    // This middleware should be added before calling `applyMiddleware`.
    app.use(graphqlUploadExpress());
    server.applyMiddleware({ app });
    await new Promise<void>((r) => app.listen({ port: 4000 }, r));
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  })
  .catch((error) => {
    console.error("Failed to get schema:", error);
  });
