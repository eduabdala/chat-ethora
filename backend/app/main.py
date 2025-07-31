from fastapi import FastAPI
from api.routes import users, conversations

app = FastAPI(title="Chat Ethora API")

app.include_router(users.router, prefix="/api/users", tags=["Users"])
app.include_router(conversations.router, prefix="/api/conversations", tags=["Conversations"])
