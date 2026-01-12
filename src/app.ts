import express from "express";
import { createTable } from "./repositories/InitRepository";
import usuarioRoutes from "./routes/usuarioRoutes";
import feedbackRoutes from "./routes/feedbackRoutes";
import materialRoutes from "./routes/materialRoutes";
import redeApoioRoutes from "./routes/redeApoioRoutes";
import ocorrenciaRoutes from "./routes/ocorrenciaRoutes";

const app = express();
app.use(express.json());
createTable();

app.use("/usuarios", usuarioRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/material", materialRoutes);
app.use("/rede_apoio", redeApoioRoutes);
app.use("/ocorrencia", ocorrenciaRoutes);

export default app;