

📘 Documentação de Testes – API Rede Conecta
1. Informações Gerais
Projeto: Rede Conecta – ACCA


Tecnologia: Node.js + Express + TypeScript


Banco de Dados: PostgreSQL (Supabase)


Ferramenta de Testes: Insomnia


URL Base: http://localhost:3000







2. Rotas de Usuário
POST /usuarios/criar
Método: POST
Rota: /usuarios/criar
Descrição: Cria um novo usuário
Body(JSON):

{
  "nome": "Juliana",
  "email": "juliana@example.com",
  "senha": "12456",
  "idade": 28,
  "identidade_genero": "cis",
  "estado": "GO",
  "cidade": "Goiânia"
}

Response – 201:
{ "id_usuario": 1,
 "nome": "Juliana",
 "email": "juliana@example.com", 
"senha": "12456",
 "idade": 28, 
"identidade_genero": "cis",
 "estado": "GO",
 "cidade": "Goiânia",
 "criado_em": "2025-12-11}

Response – 409:

{
  "erro": "duplicate key value violates unique constraint \"usuario_email_key\""
}


Status Codes: 201, 409

PUT /usuarios/{id}
Método: PUT
Rota: /usuarios/{id}
Descrição: Edita dados de um usuário existente
Body(JSON):
{ "nome": "Jessica Alves", "cidade": "Aparecida de Goiânia" } 
Response – 200:
{ "id_usuario": 1, "nome": "Jessica Alves", "email": "gabi123@email.com", "senha": "123", "idade": 28, "identidade_genero": "cis", "estado": "GO", "cidade": "Aparecida de Goiânia", "criado_em": "2025-12-11T03:42:31.901Z" } 



Response – 404:

{ "erro": "Usuário não encontrado." }

Status Codes: 200, 404

POST /usuarios/login
Método: POST
Rota: /usuarios/login
Descrição: Autentica usuário

Body(JSON):
{ "email": "jessica@example.com", "senha": "123456" }
Response – 200:
{ "id_usuario": 3, "nome": "Jessica", "email": "jessica@example.com", "senha": "123456", "idade": 28, "identidade_genero": "cis", "estado": "GO", "cidade": "Goiânia", "criado_em": "2026-01-07T02:02:49.548Z" }
Response – 401:
{ "erro": "Email ou senha incorretos." }
Status Codes: 200, 401

DELETE /usuarios/{id}
Método: DELETE
Rota: /usuarios/{id}
Descrição: Exclui usuário
Body(JSON:
{ "id_usuario": 1, "nome": "Gabriela", "email": "gabi123@email.com", "senha": "123", "idade": 28, "identidade_genero": "cis", "estado": "GO", "cidade": "Goiania", "criado_em": "2025-12-11T03:42:31.901Z" }
Response – 200:
{ "mensagem": "Usuário excluído com sucesso." }
Response – 404:
{ "erro": "Usuário não encontrado." }
Status Codes: 200, 404

GET /usuarios/
Método: GET
Rota: /usuarios/
Descrição: Lista todos os usuários

Body(JSON): { vazio}
Response – 200:
[ { "id_usuario": 3, "nome": "Jessica", "email": "jessica@example.com", "senha": "123456", "idade": 28, "identidade_genero": "cis", "estado": "GO", "cidade": "Goiânia", "criado_em": "2026-01-07T02:02:49.548Z" }, { "id_usuario": 4, "nome": "Julia", "email": "julia@example.com", "senha": "123456", "idade": 25, "identidade_genero": "cis", "estado": "GO", "cidade": "Goiânia", "criado_em": "2026-01-07T02:16:21.830Z" } // demais usuários... ]
Response – 404:
{ "erro": "Cannot GET /usuario/" }
Status Codes: 200, 404

3. Rotas de Rede de Apoio
POST /rede_apoio/criar
Método: POST
Rota: /rede_apoio/criar
Descrição: Cria nova rede de apoio
Body(JSON):
{ "nome": "Casa da Mãe Alpha", "tipo": "Abrigo", "telefone": "6222222222", "endereco": "Av. Central, 1000" }
Response – 201:
{ "id_apoio": 11, "id_usuario": null, "nome": "Casa da Mãe Alpha", "tipo_apoio": null, "endereco": "Av. Central, 1000", "telefone": "6222222222", "publico_alvo": null, "descricao": null, "criado_em": "2026-01-12T18:24:46.336Z" }
Response – 400:
{ "erro": "O campo 'nome' é obrigatório." }
Status Codes: 201, 400
GET /rede_apoio/
Método: GET
Rota: /rede_apoio/
Descrição: Lista todas as redes de apoio

Body(JSON): { vazio}

Response – 200:
[ { "id_apoio": 1, "id_usuario": 1, "nome": "Teste", "tipo_apoio": "teste tipo", "endereco": "endereço teste", "telefone": "629123456", "publico_alvo": "Algum", "descricao": "teste de descrição", "criado_em": "2025-12-12T02:47:29.886Z" }, { "id_apoio": 2, "id_usuario": null, "nome": "Casa da Mulher Brasileira", "tipo_apoio": null, "endereco": "Av. Central, 1000", "telefone": "6222222222", "publico_alvo": null, "descricao": null, "criado_em": "2026-01-12T18:24:46.336Z" } // demais registros... ]
Response – 400 (Erro de JSON inválido):
{ "erro": "SyntaxError: Expected ',' or '}' after property value in JSON" }
Status Codes: 200, 400

4. Rotas de Feedback
GET /feedback
Método: GET
Rota: /feedback
Descrição: Lista todos os feedbacks cadastrados
Body(JSON):
{vazio}
Response – 200:
[ { "id_feedback": 3, "id_usuario": null, "mensagem": "Apenas uma mensagem de teste", "data_envio": "2025-12-12T02:00:36.155Z" }, { "id_feedback": 4, "id_usuario": 3, "mensagem": "Adorei a plataforma!", "data_envio": "2026-01-14T02:35:05.892Z" } ]
Status Codes: 200
POST /feedback/criar
Método: POST
Rota: /feedback/criar
Descrição: Cria novo feedback
Body(JSON):
{ "id_usuario": 3, "mensagem": "Adorei a plataforma!" }
Response – 201:
{ "id_feedback": 4, "id_usuario": 3, "mensagem": "Adorei a plataforma!", "data_envio": "2026-01-14T02:35:05.892Z" }
Status Codes: 201, 400

5. Rotas de Ocorrência
POST /ocorrencia/criar
Método: POST
Rota: /ocorrencia/criar
Descrição: Cria nova ocorrência
Body(JSON):
{ "id_usuario": 3, "descricao": "Relato de violência", "data_ocorrencia": "2024-11-01", "status": "pendente", "id_apoio": 1 }
Response – 201:
{ "id_ocorrencia": 2, "id_usuario": 3, "descricao": "Relato de violência", "data_ocorrencia": "2024-11-01T03:00:00.000Z", "status": "pendente", "id_apoio": 1, "criado_em": "2026-01-14T02:30:45.967Z" }
Status Codes: 201, 400
GET /ocorrencia
Método: GET
Rota: /ocorrencia
Descrição: Lista todas as ocorrências cadastradas
Body(JSON): {vazio}
Response – 200:
[ { "id_ocorrencia": 1, "id_usuario": null, "descricao": "Teste de descrição", "data_ocorrencia": "2025-11-12T03:00:00.000Z", "status": "ocorrendo", "id_apoio": 1, "criado_em": "2025-12-12T02:53:38.940Z" }, { "id_ocorrencia": 2, "id_usuario": 3, "descricao": "Relato de violência", "data_ocorrencia": "2024-11-01T03:00:00.000Z", "status": "pendente", "id_apoio": 1, "criado_em": "2026-01-14T02:30:45.967Z" } ]
Status Codes: 200
6. Rotas de Materiais
POST /material/criar
Método: POST
Rota: /material/criar
Descrição: Cria novo material informativo
Body(JSON):
{ "id_usuario": 3, "titulo": "Cartilha informativa", "tipo": "pdf", "link": "https://exemplo.com/cartilha", "descricao": "Informações importantes" }
Response – 201:
{ "id_material": 5, "id_usuario": 3, "titulo": "Cartilha informativa", "tipo": "pdf", "link": "https://exemplo.com/cartilha", "descricao": "Informações importantes", "criado_em": "2026-01-14T02:23:53.895Z" }
Status Codes: 201, 400
GET /material/Listar Material
Método: GET
Rota: /material/
Descrição: Lista todos os materiais cadastrados
Body(JSON):{vazio}
Response – 200:
[ { "id_material": 1, "id_usuario": null, "titulo": "Guia sobre acolhimento", "tipo": "PDF", "link": "https://...", "descricao": "Material para formação", "criado_em": "2025-12-12T02:17:12.196Z" }, { "id_material": 5, "id_usuario": 3, "titulo": "Cartilha informativa", "tipo": "pdf", "link": "https://exemplo.com/cartilha", "descricao": "Informações importantes", "criado_em": "2026-01-14T02:23:53.895Z" } ]

