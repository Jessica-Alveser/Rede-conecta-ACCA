import { create, findAll, findByEmail } from "../repositories/UsuarioRepository";


 export async function criarContaService(data: any) {
    return create(data);
  }

  export async function loginService(email: string, senha: string) {
    const user = await findByEmail(email);
    if (!user || user.senha !== senha) {
      throw new Error("Email ou senha incorretos.");
    }

    return user;
  }

  export async function listarTodosService() {
    return findAll();
  }