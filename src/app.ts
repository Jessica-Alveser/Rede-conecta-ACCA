import express from "express";
import { createTable } from "./repositories/InitRepository";
import usuarioRoutes from "./routes/usuarioRoutes";
import feedbackRoutes from "./routes/feedbackRoutes";
import materialRoutes from "./routes/materialRoutes";

const app = express();
app.use(express.json());
createTable();

app.use("/usuarios", usuarioRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/material", materialRoutes);


export default app;