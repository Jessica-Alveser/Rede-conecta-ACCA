import express from "express";
import { createTable } from "./repositories/initRepository";
import usuarioRoutes from "./routes/usuarioRoutes";

const app = express();
app.use(express.json());
createTable();

app.use("/usuarios", usuarioRoutes);

export default app;