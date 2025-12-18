import { Request, Response } from "express";
import {criarContaService, loginService, listarTodosService} from "../services/redeApoioServices";

export async function criarConta(req: Request, res: Response) {
    try {
      const id_apoio = await criarContaService(req.body);
      res.json(id_apoio);
    } catch (err: any) {
      res.status(400).json({ erro: err.message });
    }
  }

 export async function login(req: Request, res: Response) {
    try {
      const { id_usuario } = req.body;
      const id_apoio = await loginService(id_usuario);
      res.json(redeApoio);
    } catch (err: any) {
      res.status(401).json({ erro: err.message });
    }
  }

 export async function listar(req: Request, res: Response) {
    const redeApoio = await listarTodosService();
    res.json(redeApoio);
  }

