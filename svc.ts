import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import neo4j from 'neo4j-driver';
import { resolvers, typeDefs } from './graphql/schema'; // Assuming schema is defined in another file

dotenv.config();
console.log('Neo4j URI:', process.env.NEO4J_URI);
console.log('Neo4j User:', process.env.NEO4J_USER);
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
}).catch(error => {
  console.error('Failed to get schema:', error);
});
