# Chat Ethora

Sistema de chat simples usando Node.js + Express no backend e uma aplicação frontend separada.

## Estrutura

```
chat-ethora/
│
├── backend/       # Backend Node.js + Express + TypeORM
├── frontend/      # Frontend (React ou outro framework)
└── README.md      # Este arquivo
```

## Requisitos

- Node.js (versão 18+ recomendada)
- Yarn ou npm
- Docker (opcional, para banco de dados)

## Primeiros passos

```bash
git clone https://eduabdala/chat-ethora.git
cd chat-ethora
```

### Inicializar Backend

```bash
cd backend
cp .env.example .env
yarn install
yarn dev
```

### Inicializar Frontend

```bash
cd frontend
yarn install
yarn start
```
