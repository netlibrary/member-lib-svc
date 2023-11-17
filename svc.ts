import { ApolloServer, gql } from 'apollo-server';
import { Neo4jGraphQL } from '@neo4j/graphql';
import neo4j from 'neo4j-driver/types';
import dotenv from 'dotenv';
import { typeDefs, resolvers } from './schema'; // Assuming schema is defined in another file

dotenv.config();

const driver = neo4j.driver(
  process.env.NEO4J_URI || '',
  neo4j.auth.basic(process.env.NEO4J_USER || '', process.env.NEO4J_PASSWORD || '')
);

const neoSchema = new Neo4jGraphQL({ 
  typeDefs, 
  driver,
  resolvers
});

neoSchema.getSchema().then((schema) => {
  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      // context setup if needed, like authentication
    }
  });

  server.listen().then(({ url }) => {
    console.log(`GraphQL server ready on ${url}`);
  });
});
