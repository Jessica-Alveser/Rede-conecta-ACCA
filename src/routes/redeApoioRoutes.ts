import { Router } from "express";
import { criarConta, listar } from "../controller/redeApoioController";

const routes = Router();

routes.post("/criar", criarConta);
routes.get("/", listar);

export default routes;
