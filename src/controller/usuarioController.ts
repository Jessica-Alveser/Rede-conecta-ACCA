import { Request, Response } from "express";
import {criarContaService, loginService, listarTodosService} from "../services/UsuarioService";

 export async function criarConta(req: Request, res: Response) {
    try {
      const novoUsuario = await criarContaService(req.body);
      res.json(novoUsuario);
    } catch (err: any) {
      res.status(400).json({ erro: err.message });
    }
  }

 export async function login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;
      const usuario = await loginService(email, senha);
      res.json(usuario);
    } catch (err: any) {
      res.status(401).json({ erro: err.message });
    }
  }

 export async function listar(req: Request, res: Response) {
    const usuarios = await listarTodosService();
    res.json(usuarios);
  }