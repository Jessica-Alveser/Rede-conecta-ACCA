import { create, findAll } from "../repositories/redeApoioRepository";
import { RedeApoioCreate } from "../models/redeApoio";

export async function criarContaService(data: RedeApoioCreate) {

  if (!data.nome) {
    throw new Error("O campo 'nome' é obrigatório.");
  }

  const payload = {
    ...data,
    id_usuario:
      data.id_usuario === undefined || data.id_usuario === null
        ? data.id_usuario
        : Number((data as any).id_usuario),
  };

  return create(payload as any);
}

export async function listarTodosService() {
  return findAll();
}
