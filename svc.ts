import { ApolloServer } from "apollo-server-express";
import express from "express";
import { driver } from "./apollo-neo4j/driver";
import { ogm } from "./apollo-neo4j/ogm";
import { neoSchema } from "./apollo-neo4j/schema"; // Assuming schema is defined in another file
import { graphqlUploadExpress } from "graphql-upload-ts";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

Promise.all([neoSchema.getSchema(), ogm.init()])
  .then(async ([schema]) => {
    const server = new ApolloServer({
      schema: schema,
      csrfPrevention: true,
      cache: "bounded",
      plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
      context: ({ req }) => {
        return {
          ogm,
          driver,
        };
      },
    });
    await server.start();
    const app = express();
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
