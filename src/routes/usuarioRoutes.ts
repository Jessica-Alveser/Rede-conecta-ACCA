import { Router } from "express";
import {
  criarConta,
  login,
  listar,
  editarUsuario,
  excluirUsuario
} from "../controller/usuarioController";

const routes = Router();

// Criar conta
routes.post("/criar", criarConta);

// Login
routes.post("/login", login);

// Listar todos
routes.get("/", listar);

// Editar usuário
routes.put("/:id", editarUsuario);

// Excluir usuário
routes.delete("/:id", excluirUsuario);

export default routes;
