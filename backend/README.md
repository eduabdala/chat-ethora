# Chat Ethora - Backend

API REST reescrita em Python utilizando o framework **FastAPI**.

## Tecnologias utilizadas

- Python 3.11+
- FastAPI
- Uvicorn
- SQLAlchemy
- SQLite (ou PostgreSQL, configurável)
- Python-dotenv

## Instalação

```bash
cd backend
python -m venv venv
source venv/bin/activate  # ou venv\Scripts\activate no Windows
pip install -r requirements.txt
cp .env.example .env
```

### Configurar Banco de Dados

Por padrão, o projeto utiliza SQLite. Para usar PostgreSQL, edite o arquivo `.env`:

```env
DATABASE_URL=sqlite:///./db.sqlite
# ou para PostgreSQL:
# DATABASE_URL=postgresql+asyncpg://usuario:senha@localhost:5432/chatdb
```

### Executar aplicação

```bash
uvicorn main:app --reload
```

### Aplicar migrações

Este projeto utiliza `alembic` para controle de versões do banco:

```bash
alembic upgrade head
```

## Endpoints disponíveis

- `GET    /api/users`
- `POST   /api/users`
- `GET    /api/conversations`
- `POST   /api/conversations`
- `GET    /api/conversations/{id}`
- `GET    /api/conversations/{conversation_id}/messages`
- `POST   /api/conversations/{conversation_id}/messages`
- `POST   /api/conversations/{conversation_id}/messages/seen`

## Documentação automática

Acesse a documentação interativa gerada automaticamente pelo FastAPI:

- Swagger UI: [http://localhost:8000/docs](http://localhost:8000/docs)
- ReDoc: [http://localhost:8000/redoc](http://localhost:8000/redoc)