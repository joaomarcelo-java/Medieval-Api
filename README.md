# ⚔️ Medieval API

Backend RESTful robusto e escalável para um sistema de RPG medieval, construído com NestJS, Prisma ORM e PostgreSQL. Arquitetura modular, testes E2E, stress test e documentação automática via Swagger.

> 🎓 **Projeto de treinamento** — desenvolvido com fins educacionais para praticar arquitetura backend profissional com Node.js e TypeScript.

---

## 🚀 Sobre o projeto

A Medieval API nasceu como um estudo aprofundado de arquitetura backend profissional — indo além do CRUD básico. O projeto simula o backend de um mundo medieval, com personagens, guildas e itens, aplicando os mesmos padrões de design utilizados por grandes empresas como Uber e o próprio time do NestJS.

---

## ✨ Funcionalidades

- 🧙 **Personagens** — criação, atualização, remoção e busca de personagens com validação de dados
- 🏰 **Guildas** — gerenciamento de guildas com relacionamento 1:N com personagens
- 🗡️ **Itens** — cadastro de equipamentos com filtros por raridade, tipo e nome (case insensitive)
- 📖 **Documentação interativa** — via Swagger em `/api`, sem necessidade de ferramentas externas
- 🧪 **Testes automatizados** — E2E com Supertest e stress test com Autocannon
- 🌱 **Mass Seeding** — scripts com Faker para popular o banco com milhares de registros realistas

---

## 🛠️ Tecnologias utilizadas

| Camada | Tecnologia |
|---|---|
| Framework | NestJS (TypeScript) |
| ORM | Prisma **6.0** |
| Banco de dados | PostgreSQL |
| Infraestrutura | Docker / Docker Compose |
| Validação | class-validator / class-transformer |
| Testes E2E | Jest + Supertest |
| Documentação | Swagger (OpenAPI) |

---

## 🏗️ Arquitetura

O projeto segue a arquitetura modular do NestJS, onde cada domínio é isolado em seu próprio módulo:

```
src/
├── guildas/
│   ├── dto/
│   ├── guildas.controller.ts
│   ├── guildas.service.ts
│   └── guildas.module.ts
├── personagens/
│   ├── dto/
│   ├── personagens.controller.ts
│   ├── personagens.service.ts
│   └── personagens.module.ts
├── itens/
│   ├── dto/
│   ├── itens.controller.ts
│   ├── itens.service.ts
│   └── itens.module.ts
├── app.module.ts
├── app.controller.ts
└── main.ts

prisma/
├── migrations/
└── schema.prisma
```

---

## 🧩 Domínios e Relacionamentos

```
Guilda (1) ──── (N) Personagem (1) ──── (N) Item
```

- **Guilda → Personagem**: Uma guilda possui muitos personagem; cada personagem pertence a uma guilda.
- **Personagem → Item**: Um personagem possui vários itens; cada item pertence a um único dono.

---

## 🎯 Padrões de Projeto aplicados

- **DTO (Data Transfer Object)** — objetos dedicados para entrada e validação de dados
- **Dependency Injection** — o NestJS gerencia o ciclo de vida dos serviços automaticamente
- **Partial Types** — `UpdateDTO` permite atualizar campos individuais sem reenviar o objeto completo
- **Validation Pipes** — filtros globais que barram dados inválidos antes de chegarem ao banco

---

## ▶️ Como rodar

**Pré-requisitos:**
- Node.js 18+
- Docker e Docker Compose

```bash
# Clone o repositório
git clone https://github.com/joaomarcelo-java/Medieval-Api.git

# Acesse a pasta
cd Medieval-Api

# Configure as variáveis de ambiente
cp .env.example .env

# Suba o banco de dados com Docker
docker-compose up -d

# Instale as dependências
npm install
```

**Instalação do Prisma 6.0:**
```bash
# Instala o Prisma CLI (versão 6)
npm install prisma@6 --save-dev

# Instala o Prisma Client (versão 6)
npm install @prisma/client@6

# Gera o client com base no schema
npx prisma generate

# Roda as migrations
npx prisma migrate dev
```

**Inicia a aplicação:**
```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3000`.  
A documentação Swagger estará em `http://localhost:3000/api`.

---

## 🧪 Testes

```bash
# Testes E2E
npm run test:e2e
```

---

## 🗂️ Variáveis de ambiente

Crie um arquivo `.env` na raiz com base no exemplo abaixo:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/medieval_db"
```

> O arquivo `.env` está no `.gitignore` e nunca deve ser enviado ao repositório.

---

## 👨‍💻 Autor

Feito por **João Marcelo** — sinta-se à vontade para abrir issues ou pull requests!
