# 🚀 TaskFlow

O **TaskFlow** é uma aplicação **Fullstack de gestão de projetos**, inspirada no **Trello**.  
O sistema permite que os usuários organizem fluxos de trabalho de forma **visual e colaborativa**, criando projetos, listas e tarefas por meio de uma interface intuitiva.

---

## 📋 Objetivo do Projeto

O foco principal do projeto é oferecer um ambiente onde o usuário possa **gerenciar seus próprios projetos de forma privada**.

A estrutura permite:
- Criação de listas de status como:
  - **A Fazer**
  - **Em Progresso**
  - **Concluído**
- Movimentação de tarefas entre listas através da funcionalidade de **Drag & Drop**

---

## 🛠️ Tecnologias Utilizadas

### 🔙 Backend
- **Node.js + Express** — Servidor e gerenciamento de rotas
- **TypeScript** — Linguagem base para maior segurança e tipagem
- **Prisma ORM + PostgreSQL** — Modelagem e persistência de dados
- **JWT (JSON Web Token)** — Autenticação de rotas protegidas

### 🎨 Frontend
- **React + Vite** — Interface rápida e performática
- **TailwindCSS** — Estilização moderna e responsiva
- **react-beautiful-dnd** — Funcionalidade de arrastar e soltar
- **Axios** — Comunicação eficiente com a API do backend

---

## ⚙️ Funcionalidades

### 🔐 Autenticação e Segurança
- Registro de novos usuários
- Login com geração de token JWT
- Middleware de validação para proteger rotas sensíveis
- Cada usuário tem acesso exclusivo aos seus próprios projetos

### 📊 Gestão de Projetos (Boards)
- CRUD completo de projetos:
  - Criar
  - Listar
  - Editar
  - Excluir
- Criação de listas dinâmicas dentro de cada projeto
- Gestão de tarefas:
  - Adicionar
  - Atualizar título e status
  - Excluir
- Sistema de **Drag & Drop** para reordenar tarefas entre listas

---

## 🛣️ Estrutura de Rotas da API

| Método | Rota             | Descrição                                  |
|------|------------------|--------------------------------------------|
| POST | /auth/register   | Registrar um novo usuário                  |
| POST | /auth/login      | Realizar login e receber o token JWT       |
| GET  | /projects        | Listar projetos do usuário logado          |
| POST | /projects        | Criar um novo projeto                      |
| POST | /lists           | Adicionar uma lista a um projeto           |
| POST | /tasks           | Criar uma nova tarefa                      |
| PUT  | /tasks/:id       | Atualizar dados ou status de uma tarefa    |

---

## 🚀 Como Executar o Projeto

### ✅ Pré-requisitos
- Node.js
- Banco de dados PostgreSQL

### 📦 Instalação

1. Clone o repositório  
2. No diretório `backend/`:
   - Instale as dependências
   - Execute as migrações do Prisma
3. No diretório `frontend/`:
   - Instale as dependências
   - Inicie o servidor de desenvolvimento com Vite

---

## 🎯 Considerações Finais

Este projeto foi desenvolvido como um **desafio técnico**, com foco em:
- Boas práticas de **TypeScript**
- Organização e escalabilidade do código
- Segurança com **JWT**
- Experiência do usuário (**UX/UI**)
