import { create, findAll } from "../repositories/redeApoioRepository";

export async function criarContaService(data: any) {
    return create(data);
  }

  export async function loginService(id_usuario: string) {

    return user;
  }

  export async function listarTodosService() {
    return findAll();
  }
