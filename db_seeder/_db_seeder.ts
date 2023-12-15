import neo4j from 'neo4j-driver';
import dotenv from 'dotenv';
import { OGM } from "@neo4j/graphql-ogm";
import { typeDefs } from '../graphql/schema';
import { seedMembers } from './member';
import { seedCollections } from './collection';

dotenv.config();

export const driver = neo4j.driver(
  process.env.NEO4J_URI || '',
  neo4j.auth.basic(process.env.NEO4J_USER || '', process.env.NEO4J_PASSWORD || '')
);
const ogm = new OGM({ typeDefs, driver });

// Define your models
export const Collection = ogm.model('Collection');
export const Member = ogm.model('Member'); // Add this if not already defined

// Seed function
async function seedDatabase() {
  await seedMembers()
  await seedCollections()
  console.log('Database seeded!');
}

// Initialize the database and then start the server
ogm.init()
  .then(() => {
    return seedDatabase(); // Seed the database
  })
  .catch(error => {
    console.error('Error:', error);
  });