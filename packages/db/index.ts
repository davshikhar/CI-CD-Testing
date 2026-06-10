import dotenv from "dotenv";
import path from "path";

import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// dotenv.config({ path: path.resolve("/db", ".env") });

const connectionString = process.env.DATABASE_URL ?? "postgresql://postgres:mysecretpassword@localhost:5432/postgres";
console.log("db url: ", connectionString);

const adapter = new PrismaPg({ connectionString });
export const prismaClient = new PrismaClient({ adapter });

