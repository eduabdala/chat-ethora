from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def list_conversations():
    """
    GET /api/conversations
    Retorna todas as conversas.
    """
    pass

@router.post("/")
async def create_conversation():
    """
    POST /api/conversations
    Cria uma nova conversa.
    """
    pass

@router.get("/{conversation_id}")
async def get_conversation(conversation_id: int):
    """
    GET /api/conversations/{conversation_id}
    Retorna uma conversa específica.
    """
    pass

@router.get("/{conversation_id}/messages")
async def list_messages(conversation_id: int):
    """
    GET /api/conversations/{conversation_id}/messages
    Retorna mensagens da conversa.
    """
    pass

@router.post("/{conversation_id}/messages")
async def send_message(conversation_id: int):
    """
    POST /api/conversations/{conversation_id}/messages
    Envia uma mensagem na conversa.
    """
    pass

@router.post("/{conversation_id}/messages/seen")
async def mark_as_seen(conversation_id: int):
    """
    POST /api/conversations/{conversation_id}/messages/seen
    Marca mensagens como visualizadas.
    """
    pass
