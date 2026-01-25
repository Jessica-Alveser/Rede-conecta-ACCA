import {
  create,
  findAll,
  findByEmail,
  update,
  remove
} from "../repositories/UsuarioRepository";

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

export async function editarUsuarioService(id: number, dados: any) {
  const usuarioAtualizado = await update(id, dados);

  if (!usuarioAtualizado) {
    throw new Error("Usuário não encontrado.");
  }

  return usuarioAtualizado;
}

export async function excluirUsuarioService(id: number) {
  const removido = await remove(id);

  if (!removido) {
    throw new Error("Usuário não encontrado.");
  }

  return;
}
