// src/repositories/redeApoioRepository.ts
import { pool } from "../database/db";

export interface RedeApoio {
  id_apoio: number;
  id_usuario: number | null;
  nome: string;
  tipo_apoio: string | null;
  endereco: string | null;
  telefone: string | null;
  publico_alvo: string | null;
  descricao: string | null;
  criado_em: string;
}

export async function create(redeApoio: Omit<RedeApoio, 'id_apoio' | 'criado_em'>): Promise<RedeApoio> {
  const query = `
  INSERT INTO rede_apoio (id_usuario, nome, tipo_apoio, endereco, telefone, publico_alvo, descricao)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
  const values = [
    redeApoio.id_usuario ?? null,
    redeApoio.nome,
    redeApoio.tipo_apoio ?? null,
    redeApoio.endereco ?? null,
    redeApoio.telefone ?? null,
    redeApoio.publico_alvo ?? null,
    redeApoio.descricao ?? null,
  ];
  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function findAll(): Promise<RedeApoio[]> {
  const result = await pool.query('SELECT * FROM rede_apoio ORDER BY id_apoio;');
  return result.rows;
}