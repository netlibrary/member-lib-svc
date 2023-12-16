import { ApolloServer } from 'apollo-server';
import { ogm } from './apollo-neo4j/ogm';
import { neoSchema } from './apollo-neo4j/schema'; // Assuming schema is defined in another file
import { driver } from './apollo-neo4j/driver';



Promise.all([neoSchema.getSchema(), ogm.init()]).then(([schema]) => {
  const server = new ApolloServer({
    schema: schema,
    context: ({ req }) => {
      return {
        ogm,
        driver
      };
    }
  });

  server.listen().then(({ url }) => {
    console.log(`GraphQL server ready on ${url}`);
  });
}).catch(error => {
  console.error('Failed to get schema:', error);
});