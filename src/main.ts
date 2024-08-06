import {ogm} from "./apollo-neo4j/ogm.js";
import {neoSchema} from "./apollo-neo4j/schema.js"; // Assuming schema is defined in another file
import {driver} from "./apollo-neo4j/driver.js";
import {startApolloServer} from "./apollo_server.js";
import {setOGMs} from "../global/ogm.js";


async function startServer() {
    const [schema] = await Promise.all([neoSchema.getSchema(), ogm.init()]);
    setOGMs(ogm);
    try {
        const {httpServer, apolloServer} = await startApolloServer(schema, driver, ogm);
        await new Promise<void>((resolve) => httpServer.listen({port: 4000}, resolve));
        console.log(`🚀 Server ready at http://localhost:4000/graphql`);
    } catch (error) {
        console.error("Failed to get schema:", error);
    }
}

startServer();