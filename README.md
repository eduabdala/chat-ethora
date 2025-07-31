# Chat Ethora

Sistema de chat simples utilizando **Python + FastAPI** no backend e uma aplicação frontend utilizando **React.js**.

## Estrutura

```
chat-ethora/
│
├── backend/       # Backend Python + FastAPI + SQLAlchemy
├── database/      # Database PostgreSQL
├── docs/          # Documentação do projeto, diagramas e etc
├── frontend/      # Frontend (React.js)
└── README.md      # Este arquivo
```

## Requisitos

- Node.js (versão 18+ recomendada)
- Yarn ou npm
- Python 3.10+
- Docker (opcional, para o banco de dados PostgreSQL)

## Primeiros passos

```bash
git clone https://eduabdala/chat-ethora.git
cd chat-ethora
```

### Inicializar Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

pip install -r requirements.txt

# Criar variáveis de ambiente
cp .env.example .env

# Rodar o servidor
uvicorn app.main:app --reload

```

### Inicializar Frontend

```bash
cd frontend
yarn install
yarn start
```

## Documentação

A documentação do projeto (modelos de dados, diagramas, endpoints etc.) está na pasta docs/.
