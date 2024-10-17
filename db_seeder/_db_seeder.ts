import {seedMembers} from './member.js';
import {testDriver} from "../tests/helpers/driver.js";
import {driver} from "../src/db/driver.js"
import {OGM} from "../src/wrapper.js"
import {initDatabaseSchema} from "../src/db/init.js";
import {typeDefs} from "../src/db/type-defs/_typeDefs.js";

export const seedDriver = process.env.SEED_MODE == "test" ? testDriver : driver; // Export the driver for testing
export const seedOgm =  new OGM({ typeDefs, driver: seedDriver });

// Seed function
async function seedDatabase() {
  await seedOgm.init()
  await initDatabaseSchema(seedDriver)
  await seedMembers()
}

seedDatabase()
