// src/repositories/UsuarioRepository.ts
import {pool} from "../database/db";

export interface Usuario {
  id_usuario: number;
  nome: string;
  email: string;
  senha: string;
  idade?: number | null;
  identidade_genero?: string | null;
  estado?: string | null;
  cidade?: string | null;
  criado_em?: string;
}

export async function create(usuario: Omit<Usuario, 'id_usuario' | 'criado_em'>): Promise<Usuario> {
    const query = `
      INSERT INTO usuario (nome, email, senha, idade, identidade_genero, estado, cidade)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [
      usuario.nome,
      usuario.email,
      usuario.senha,
      usuario.idade ?? null,
      usuario.identidade_genero ?? null,
      usuario.estado ?? null,
      usuario.cidade ?? null
    ];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

 export async function findByEmail(email: string): Promise<Usuario | null> {
    const result = await pool.query(`SELECT * FROM usuario WHERE email = $1`, [email]);
    return result.rows[0] || null;
  }

  export async function findAll(): Promise<Usuario[]> {
    const result = await pool.query('SELECT * FROM usuario ORDER BY id_usuario;');
    return result.rows;
  }

