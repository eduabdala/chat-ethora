from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class MessageCreate(BaseModel):
    sender_id: int = Field(..., alias="senderId")
    content: str


class MessageSeen(BaseModel):
    message_id: int = Field(..., alias="messageId")
    user_id: int = Field(..., alias="userId")


class MessageOut(BaseModel):
    id: int
    sender_id: int
    conversation_id: int
    content: str
    seen: bool
    created_at: datetime

    class Config:
        orm_mode = True
