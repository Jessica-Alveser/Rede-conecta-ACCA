import { Request, Response } from "express";
import { criarContaService, listarTodosService } from "../services/redeApoioServices";

export async function criarConta(req: Request, res: Response) {
  try {
    const novoRegistro = await criarContaService(req.body);
    return res.status(201).json(novoRegistro);
  } catch (err: any) {
    console.error("Erro ao criar rede de apoio:", err);
    return res.status(400).json({ erro: err.message || "Erro interno" });
  }
}

export async function listar(req: Request, res: Response) {
  try {
    const lista = await listarTodosService();
    return res.json(lista);
  } catch (err: any) {
    console.error("Erro ao listar rede de apoio:", err);
    return res.status(500).json({ erro: "Erro ao listar registros" });
  }
}
