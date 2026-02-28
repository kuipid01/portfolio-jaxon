import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/db/schema";

const globalForDb = globalThis as unknown as {
  sql?: ReturnType<typeof postgres>;
};

function getDatabaseUrl() {
  return process.env.DATABASE_URL;
}

export function createDbClient() {
  const databaseUrl = getDatabaseUrl();

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set");
  }

  if (!globalForDb.sql) {
    globalForDb.sql = postgres(databaseUrl, {
      max: 1,
      prepare: false,
    });
  }

  return drizzle(globalForDb.sql, { schema });
}
