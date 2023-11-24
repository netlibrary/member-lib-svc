import { Neo4jGraphQL } from '@neo4j/graphql';
import { OGM } from "@neo4j/graphql-ogm";
import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import neo4j from 'neo4j-driver';
import { typeDefs } from './graphql/schema'; // Assuming schema is defined in another file

dotenv.config();

const driver = neo4j.driver(
  process.env.NEO4J_URI || '',
  neo4j.auth.basic(process.env.NEO4J_USER || '', process.env.NEO4J_PASSWORD || '')
);

const ogm = new OGM({ typeDefs, driver });

const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
  
});

Promise.all([neoSchema.getSchema(), ogm.init()]).then(([schema]) => {
  const server = new ApolloServer({
    schema,
  });

  server.listen().then(({ url }) => {
    console.log(`GraphQL server ready on ${url}`);
  });
}).catch(error => {
  console.error('Failed to get schema:', error);
});
