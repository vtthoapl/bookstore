// Import the necessary PostgreSQL library - needed to do npm install postgres in svelte
import postgres from "postgres";

let sql;

if (process.env.DATABASE_URL) {
  // Use DATABASE_URL provided by render.com
  sql = postgres(process.env.DATABASE_URL);
} else {
  // Establish a connection to the PostgreSQL database
  sql = postgres("postgres://username:password@database:5432/database");
}

export { sql };
