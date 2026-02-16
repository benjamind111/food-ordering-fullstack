"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("prisma/config");
const adapter_better_sqlite3_1 = require("@prisma/adapter-better-sqlite3");
exports.default = (0, config_1.defineConfig)({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
        seed: "npx tsx prisma/seed.ts",
    },
    datasource: {
        url: process.env["DATABASE_URL"],
        adapterFactory: new adapter_better_sqlite3_1.PrismaBetterSqlite3({
            url: "file:./dev.db",
        }),
    },
});
//# sourceMappingURL=prisma.config.js.map