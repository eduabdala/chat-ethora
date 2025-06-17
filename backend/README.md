# Chat Ethora - Backend

API REST construída com:
- Node.js
- Express
- TypeORM
- SQLite (ou PostgreSQL, configurável)

## Instalação

```bash
cd backend
yarn install
cp .env.example .env
```

### Configurar Banco de Dados

Por padrão, o projeto usa SQLite. Se quiser usar PostgreSQL, configure as variáveis em `.env`.

```env
TYPEORM_CONNECTION=sqlite
TYPEORM_DATABASE=./db.sqlite
# ou para PostgreSQL:
# TYPEORM_CONNECTION=postgres
# TYPEORM_HOST=localhost
# TYPEORM_PORT=5432
# TYPEORM_USERNAME=postgres
# TYPEORM_PASSWORD=postgres
# TYPEORM_DATABASE=chatdb
```

### Comandos

```bash
yarn dev         # Executa em modo desenvolvimento
yarn typeorm migration:run  # Aplica as migrações
```

## Rotas disponíveis

- `GET    /api/users`
- `POST   /api/users`
- `GET    /api/conversations`
- `POST   /api/conversations`
- `GET    /api/conversations/:id`
- `GET    /api/conversations/:conversationId/messages`
- `POST   /api/conversations/:conversationId/messages`
- `POST   /api/conversations/:conversationId/messages/seen`
