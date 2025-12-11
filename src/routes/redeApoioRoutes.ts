import { Router } from "express";
import { criarConta, login, listar} from "../controller/redeApoioController";


const routes =  Router();

routes.post("/criar", criarConta);
routes.get("/", login);
routes.get("/", listar);

export default routes ;