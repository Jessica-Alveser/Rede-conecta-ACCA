export interface RedeApoio {
  id_apoio: number;
  id_usuario: string;
  nome: string;
  tipo_apoio: string | null;
  endereco: string | null;
  telefone: string | null;
  publico_alvo: string | null;
  descricao: string | null;
  criado_em: string;
}
// Interface auxiliar para o método de criação (exclui o ID e a data)
export interface RedeApoioCreate {
    id_usuario: string;
    nome: string;
    tipo_apoio: string | null;
    endereco: string | null;
    telefone: string | null;
    publico_alvo: string | null;
    descricao: string | null;
}