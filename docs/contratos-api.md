📄 CONTRATOS DA API – Rede Conecta

Base URL:

http://localhost:3000

 1. AUTENTICAÇÃO
POST /auth/register

Criar conta de usuário.

Body:
{
  "nome": "Jessica",
  "email": "jessica@example.com",
  "senha": "123456",
  "idade": 28,
  "identidade_genero": "cis",
  "estado": "GO",
  "cidade": "Goiânia"
}

Resposta 200
{
  "id_usuario": 1,
  "nome": "Jessica",
  "email": "jessica@example.com"
}


Erros possíveis:

400 – Campo obrigatório ausente

409 – Email já cadastrado

POST /auth/login

Login do usuário.

Body:
{
  "email": "jessica@example.com",
  "senha": "123456"
}

Resposta 200
{
  "mensagem": "Login bem-sucedido",
  "id_usuario": 1
}


Erros:

401 – Credenciais inválidas

 2. USUÁRIOS
GET /usuarios

Lista todos os usuários cadastrados.

Resposta 200
[
  {
    "id_usuario": 1,
    "nome": "Jessica",
    "email": "jessica@example.com"
  }
]

3. MATERIAIS
POST /materiais

Cadastrar material.

Body
{
  "id_usuario": 1,
  "titulo": "Cartilha informativa",
  "tipo": "pdf",
  "link": "https://exemplo.com/cartilha",
  "descricao": "Informações importantes"
}

Resposta
{
  "id_material": 1,
  "titulo": "Cartilha informativa"
}

GET /materiais

Listar todos os materiais.

 4. REDE DE APOIO
POST /rede-apoio
Body
{
  "id_usuario": 1,
  "nome": "Casa da Mulher",
  "tipo_apoio": "Psicológico",
  "endereco": "Rua X",
  "telefone": "62 99999-0000",
  "publico_alvo": "Mulheres",
  "descricao": "Atendimento especializado"
}

GET /rede-apoio

Lista redes de apoio.

 5. OCORRÊNCIAS
POST /ocorrencias
Body
{
  "id_usuario": 1,
  "descricao": "Relato de violência",
  "data_ocorrencia": "2024-11-01",
  "status": "pendente",
  "id_apoio": 1
}

GET /ocorrencias

Lista todas as ocorrências.

 6. FEEDBACK
POST /feedback
Body
{
  "id_usuario": 1,
  "mensagem": "Adorei a plataforma!"
}

GET /feedback

Lista feedbacks enviados.
