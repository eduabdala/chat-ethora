from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def list_users():
    """
    GET /api/users
    
    Retorna todos os usuários.
    """
    pass

@router.get("/{user_id}")
async def get_users_by_id(user_id: int):
    """
    GET /api/users/id
    
    Retorna usuario unico pelo id.
    """
    pass

@router.post("/")
async def create_user():
    """
    POST /api/users
    
    Cria um novo usuário.
    """
    pass

@router.put("/{user_id}")
async def update_user(user_id: int):
    """
    PUT /api/users/id
    
    Edita um usuario pelo id.
    """
    pass

@router.delete("/{user_id}")
async def delete_user(user_id: int):
    """
    DELETE /api/users/id
    
    Deleta um usuario pelo id.
    """
    pass
