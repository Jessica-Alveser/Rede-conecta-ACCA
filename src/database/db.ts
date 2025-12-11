// db.js
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

// Criando a conexão com o banco
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});