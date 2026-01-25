import { Request, Response } from "express";
import {
  criarContaService,
  loginService,
  listarTodosService,
  editarUsuarioService,
  excluirUsuarioService
} from "../services/UsuarioService";

export async function criarConta(req: Request, res: Response) {
  try {
    const novoUsuario = await criarContaService(req.body);
    res.status(201).json(novoUsuario);
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

export async function editarUsuario(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const usuarioAtualizado = await editarUsuarioService(id, req.body);
    res.json(usuarioAtualizado);
  } catch (err: any) {
    res.status(400).json({ erro: err.message });
  }
}

export async function excluirUsuario(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await excluirUsuarioService(id);
    res.json({ mensagem: "Usuário excluído com sucesso." });
  } catch (err: any) {
    res.status(400).json({ erro: err.message });
  }
}
