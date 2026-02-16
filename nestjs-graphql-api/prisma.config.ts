import "dotenv/config";
import { defineConfig } from "prisma/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "npx tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env["DATABASE_URL"]!,
    adapterFactory: new PrismaBetterSqlite3({
      url: "file:./dev.db",
    }),
  },
} as any);
