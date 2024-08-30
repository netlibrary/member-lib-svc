// Create a logging function
import fs from "fs";

const logQuery = (query: string, params: any) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}\nQuery: ${query}\nParams: ${JSON.stringify(params)}\n\n`;

    fs.appendFile("neo4j_queries.log", logMessage, (err) => {
        if (err) console.error("Failed to write to log file:", err);
    });

    // Also log to console
    console.log("Executed Neo4j query:", query, "with params:", params);
};