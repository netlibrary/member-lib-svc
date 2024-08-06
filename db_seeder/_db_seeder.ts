import {seedMembers} from './member.js';
import {testDriver} from "../tests/helpers/driver.js";
import {driver} from "../src/apollo-neo4j/driver.js"
import {OGM} from "../src/wrapper.js"
import {typeDefs} from "../src/apollo-neo4j/type-defs/_typeDefs.js";

export const seedDriver = process.env.SEED_MODE == "test" ? testDriver : driver; // Export the driver for testing
export const seedOgm =  new OGM({ typeDefs, driver: seedDriver });

// Seed function
async function seedDatabase() {
  await seedOgm.init()
  await seedMembers()
}

seedDatabase()
