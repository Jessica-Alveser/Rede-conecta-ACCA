import { Router } from "express";
import { criarConta, login, listar} from "../controller/usuarioController";

const routes = Router();

routes.post("/criar", criarConta);
routes.post("/login", login);
routes.get("/", listar);

export default routes;
