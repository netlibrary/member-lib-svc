// import { ApolloServer } from 'apollo-server';
// import { createTestClient } from 'apollo-server-testing';
// import { typeDefs } from './schema';
// import { resolvers } from './resolvers';
// import { Neo4jDriver } from './neo4jDriver'; // Your Neo4j driver implementation
//
// describe('Bookmark Mutations', () => {
//     let testServer: ApolloServer;
//     let mutate: any;
//     let neo4jDriver: Neo4jDriver;
//
//     beforeAll(async () => {
//         // Set up test database connection
//         neo4jDriver = new Neo4jDriver('neo4j://localhost:7687', 'neo4j', 'password');
//
//         testServer = new ApolloServer({
//             typeDefs,
//             resolvers,
//             context: () => ({ driver: neo4jDriver }),
//         });
//
//         const testClient = createTestClient(testServer);
//         mutate = testClient.mutate;
//     });
//
//     afterAll(async () => {
//         // Close database connection
//         await neo4jDriver.close();
//         await testServer.stop();
//     });
//
//     describe('deleteAllBms mutation', () => {
//         beforeEach(async () => {
//             // Seed the database with test bookmarks
//             await seedTestBookmarks(neo4jDriver);
//         });
//
//         afterEach(async () => {
//             // Clean up the database after each test
//             await cleanDatabase(neo4jDriver);
//         });
//
//         it('should delete all bookmarks and return the correct count', async () => {
//             // First, count existing bookmarks
//             const initialCount = await countBookmarks(neo4jDriver);
//             expect(initialCount).toBeGreaterThan(0); // Ensure we have bookmarks to delete
//
//             const DELETE_ALL_BMS = `
//         mutation {
//           deleteAllBms
//         }
//       `;
//
//             const response = await mutate({ mutation: DELETE_ALL_BMS });
//
//             // Check the response
//             expect(response.errors).toBeUndefined();
//             expect(response.data.deleteAllBms).toBe(initialCount);
//
//             // Verify that all bookmarks are deleted from the database
//             const finalCount = await countBookmarks(neo4jDriver);
//             expect(finalCount).toBe(0);
//         });
//
//         it('should return 0 when no bookmarks exist', async () => {
//             // First, ensure no bookmarks exist
//             await cleanDatabase(neo4jDriver);
//
//             const DELETE_ALL_BMS = `
//         mutation {
//           deleteAllBms
//         }
//       `;
//
//             const response = await mutate({ mutation: DELETE_ALL_BMS });
//
//             // Check the response
//             expect(response.errors).toBeUndefined();
//             expect(response.data.deleteAllBms).toBe(0);
//
//             // Verify that the database is still empty
//             const finalCount = await countBookmarks(neo4jDriver);
//             expect(finalCount).toBe(0);
//         });
//     });
// });
//
// // Helper functions
//
// async function seedTestBookmarks(driver: Neo4jDriver) {
//     const session = driver.session();
//     try {
//         await session.run(`
//       CREATE (b1:Bookmark {id: 'test-id-1', name: 'Test Bookmark 1', domainName: 'example1.com'})
//       CREATE (b2:Bookmark {id: 'test-id-2', name: 'Test Bookmark 2', domainName: 'example2.com'})
//       CREATE (b3:Bookmark {id: 'test-id-3', name: 'Test Bookmark 3', domainName: 'example3.com'})
//     `);
//     } finally {
//         await session.close();
//     }
// }
//
// async function cleanDatabase(driver: Neo4jDriver) {
//     const session = driver.session();
//     try {
//         await session.run('MATCH (n) DETACH DELETE n');
//     } finally {
//         await session.close();
//     }
// }
//
// async function countBookmarks(driver: Neo4jDriver): Promise<number> {
//     const session = driver.session();
//     try {
//         const result = await session.run('MATCH (b:Bookmark) RETURN count(b) as count');
//         return result.records[0].get('count').toNumber();
//     } finally {
//         await session.close();
//     }
// }