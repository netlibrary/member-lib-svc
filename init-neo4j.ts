import neo4j from 'neo4j-driver';
import dotenv from 'dotenv';

dotenv.config();

const driver = neo4j.driver(
  process.env.NEO4J_URI || '',
  neo4j.auth.basic(process.env.NEO4J_USER || '', process.env.NEO4J_PASSWORD || '')
);
const session = driver.session();

async function createSchema(): Promise<void> {
    try {
        // Create constraints for uniqueness
        // await session.run('CREATE CONSTRAINT FOR (b:Bookmark) REQUIRE b.id IS UNIQUE');
        // await session.run('CREATE CONSTRAINT FOR (f:Folder) REQUIRE f.id IS UNIQUE');
        // await session.run('CREATE CONSTRAINT FOR (c:Collection) REQUIRE c.id IS UNIQUE');
        // await session.run('CREATE CONSTRAINT FOR (m:Member) REQUIRE m.id IS UNIQUE');

        await session.run('CREATE (f:Folder:Container)');
        await session.run('CREATE (f:Collection:Container)');

        console.log("Schema created successfully");
    } catch (error) {
        console.error("Error creating schema:", error);
    } finally {
        await session.close();
    }
}

createSchema().then(() => driver.close()).catch(console.error);