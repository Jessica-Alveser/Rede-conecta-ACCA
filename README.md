🌸 Rede Conecta — Plataforma de Apoio e Informação para Mulheres
Conectando , fortalecendo histórias e criando redes de apoio reais
📍 Projeto acadêmico desenvolvido com foco em acolhimento, informação e conexão
 📚 Backend em Node.js + PostgreSQL
 💻 Desenvolvido no VS Code
 🌍 Banco de dados online (Supabase)
📖 Começar Agora • 📚 Documentação • 🔗 Contratos da API • 🧪 Testes no Insomnia

💡 Sobre o projeto
O Rede Conecta é uma plataforma criada para mulheres que buscam apoio, informação e segurança.
 O projeto nasceu da necessidade de centralizar, em um único lugar, redes de apoio, materiais informativos e registros de ocorrências, facilitando o acesso a recursos confiáveis.

🎯 Objetivos principais:
Criar uma rede de apoio acessível


Oferecer materiais informativos


Permitir registros de ocorrências


Garantir organização e segurança dos dados


Promover empoderamento feminino através da informação



🧠 O que a plataforma faz
✅ Cadastro e autenticação de usuárias
 ✅ Listagem e gerenciamento de redes de apoio
 ✅ Cadastro de materiais informativos
 ✅ Registro de ocorrências
 ✅ Envio de feedbacks
 ✅ API organizada em camadas (Controller, Service, Repository)

🏗️ Estrutura do projeto
rede-conecta/
├── src/
│   ├── controllers/     # Recebem requisições e retornam respostas
│   ├── services/        # Regras de negócio
│   ├── repositories/   # Acesso ao banco de dados
│   ├── routes/          # Rotas da API
│   ├── database/        # Conexão com PostgreSQL / Supabase
│   ├── models/          # Tipagem e interfaces
│   ├── app.ts           # Configuração do Express
│   └── server.ts        # Inicialização do servidor
├── .env                 # Variáveis de ambiente
├── package.json
└── README.md


🗄️ Banco de Dados
PostgreSQL


Modelagem relacional (MER)


Tabelas com:


Primary Keys


Foreign Keys


Constraints


Seeds para testes


Banco hospedado no Supabase


Principais tabelas:
usuario


rede_apoio


material


ocorrencia


feedback



🔌 Contratos da API (exemplos)
👤 Usuários
POST /usuarios/criar
 Cria uma nova conta
{
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "senha": "123456",
  "idade": 28,
  "estado": "SP",
  "cidade": "São Paulo"
}

POST /usuarios/login
{
  "email": "maria@email.com",
  "senha": "123456"
}


🤝 Rede de Apoio
POST /rede_apoio
{
  "nome": "Casa da Mulher",
  "telefone": "(11) 99999-9999",
  "cidade": "São Paulo",
  "estado": "SP",
  "descricao": "Apoio psicológico e jurídico"
}

GET /rede_apoio

📚 Materiais
POST /material
{
  "titulo": "Lei Maria da Penha",
  "descricao": "Informações sobre direitos da mulher",
  "link": "https://exemplo.com"
}


🚨 Ocorrências
POST /ocorrencia
{
  "descricao": "Situação de risco relatada",
  "data_ocorrencia": "2025-11-10",
  "id_usuario": 1
}


🧪 Testes da API
Todos os endpoints foram testados usando:
Insomnia


✔ Testes de sucesso
 ✔ Testes de erro (campos ausentes, ID inexistente, etc.)
 ✔ Documentação dos testes para entrega acadêmica

🧑‍💻 Tecnologias utilizadas
Node.js


TypeScript


Express


PostgreSQL


Supabase


Git & GitHub


Insomnia


VS Code



🔄 Versionamento e trabalho em grupo
Uso de branches para cada integrante


Merges realizados na branch master


Resolução de conflitos


Commits organizados e documentados



🚀 Como rodar o projeto
# Clone o repositório
git clone https://github.com/Jessica-Alveser/Rede-conecta-ACCA.git

# Acesse a pasta
cd Rede-conecta-ACCA

# Instale as dependências
npm install

# Configure o .env
DATABASE_URL=postgresql://...

# Rode o projeto
npm start

Servidor disponível em:
 👉 http://localhost:3000

🤝 Como contribuir
Fork o repositório


Crie uma branch


git checkout -b minha-contribuicao

Commit suas alterações


git commit -m "Descrição clara da mudança"

Push e abra um Pull Request



📜 Licença
Este projeto está sob a licença MIT
 ✔ Uso livre
 ✔ Modificação permitida
 ✔ Compartilhamento autorizado

✨ Agradecimentos
Projeto desenvolvido como parte do Projeto Integrador, unindo aprendizado técnico, trabalho em equipe e impacto social.
💜 Feito com cuidado, aprendizado e propósito
Se este projeto te ajudou:
⭐ Dê uma estrela no repositório


🔄 Compartilhe


💬 Envie feedback


 	