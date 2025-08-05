from pydantic import BaseModel, EmailStr
from typing import Optional
from uuid import UUID
from datetime import datetime

class UserBase(BaseModel):
    """
    Schema base para um usuário.
    Contém campos compartilhados entre criação, leitura e atualização.
    """
    username: str
    email: EmailStr

class UserCreate(UserBase):
    """
    Schema para criação de usuário.
    Inclui senha como campo obrigatório.
    """
    password: str

class UserRead(UserBase):
    """
    Schema para leitura de usuário.
    Inclui ID e timestamps.
    """
    id: UUID
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True

class UserUpdate(BaseModel):
    """
    Schema para atualização parcial de usuário.
    Todos os campos são opcionais.
    """
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None
