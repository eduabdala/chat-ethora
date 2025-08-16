from typing import Optional
from uuid import uuid4, UUID
from datetime import datetime
from sqlmodel import SQLModel, Field
from pydantic import EmailStr

class User(SQLModel, table=True):
    """
    Modelo de usuário que atua como:
    - ORM (tabela do banco via SQLAlchemy)
    - Schema Pydantic para validação
    - Suporta criação, leitura e atualização
    """

    id: UUID = Field(default_factory=uuid4, primary_key=True, index=True)
    username: str = Field(index=True, nullable=False)
    email: EmailStr = Field(unique=True, nullable=False)
    password: Optional[str] = Field(default=None, nullable=True)
    created_at: datetime = Field(default_factory=datetime.utcnow, nullable=False)
    updated_at: datetime = Field(default_factory=datetime.utcnow, nullable=False)

    class Config:
        from_attributes = True
