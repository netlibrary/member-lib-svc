import {Driver} from "neo4j-driver/types/driver.js";

export async function initDatabaseSchema(driver: Driver) {
    const session = driver.session();
    try {
        await session.run(
            'MATCH (n)\n' +
            'DETACH DELETE n'
        );
        // Delete all existing constraints and indexes
        await session.run('CALL apoc.schema.assert({}, {})');

        // Create constraints
        await session.run('CREATE CONSTRAINT tag_name_unique IF NOT EXISTS FOR (t:Tag) REQUIRE t.name IS UNIQUE');

        // Constraint for unique collection names per member
        await session.run(`
            CREATE CONSTRAINT member_collection_name_unique IF NOT EXISTS 
            FOR (c:Collection) 
            REQUIRE (c.memberId, c.name) IS UNIQUE
        `);

        console.log('Database schema initialized successfully');
    } catch (error) {
        console.error('Error initializing database schema:', error);
        throw error;
    } finally {
        await session.close();
    }
}