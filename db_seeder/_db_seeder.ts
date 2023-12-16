import { ogm } from '../apollo-neo4j/ogm';
import { seedCollections } from './collection';
import { seedMembers } from './member';


// Seed function
async function seedDatabase() {
  await ogm.init()
  await seedMembers()
  console.log('Database seeded!');
}

seedDatabase(); // Seed the database

