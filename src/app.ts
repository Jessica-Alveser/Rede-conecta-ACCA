import express from "express";
import { createTable } from "./repositories/InitRepository";
import usuarioRoutes from "./routes/usuarioRoutes";
import ocorrenciaRoutes from "./routes/ocorrenciaRoutes";
import redeApoioRoutes from "./routes/redeApoioRoutes";
import feedbackRoutes from "./routes/feedbackRoutes";
import materialRoutes from "./routes/materialRoutes";

const app = express();
app.use(express.json());
createTable();

app.use("/usuarios", usuarioRoutes);
app.use("/rede_apoio", redeApoioRoutes);
app.use("/ocorrencia", ocorrenciaRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/material", materialRoutes);


export default app;
