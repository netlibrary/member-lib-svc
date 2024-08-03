import { ogm } from '../src/apollo-neo4j/ogm';
import { seedMembers } from './member';


// Seed function
async function seedDatabase() {
  await ogm.init()
  await seedMembers()
  console.log('Database seeded!');
}

seedDatabase(); // Seed the database

