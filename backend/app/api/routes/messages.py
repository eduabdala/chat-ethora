from fastapi import APIRouter, Path, Body
from typing import List

from app.schemas.message import MessageCreate, MessageSeen, MessageOut

router = APIRouter(
    prefix="/api/conversations/{conversation_id}/messages",
    tags=["Messages"]
)

@router.get("/", response_model=List[MessageOut])
async def get_messages_by_conversation(
    conversation_id: int = Path(..., description="ID da conversa")
):
    """
    Lista todas as mensagens de uma conversa.
    """
    pass


@router.post("/", response_model=MessageOut, status_code=201)
async def send_message(
    conversation_id: int = Path(..., description="ID da conversa"),
    message: MessageCreate = Body(...)
):
    """
    Envia uma nova mensagem em uma conversa.
    """
    pass


@router.post("/seen", response_model=MessageOut)
async def mark_message_as_seen(
    conversation_id: int = Path(..., description="ID da conversa"),
    payload: MessageSeen = Body(...)
):
    """
    Marca uma mensagem como visualizada.
    """
    pass
