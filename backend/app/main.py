from fastapi import FastAPI
from app.api.routes import users, conversations, messages

app = FastAPI(title="Chat Ethora API")

app.include_router(users.router, prefix="/api/users", tags=["Users"])
app.include_router(conversations.router, prefix="/api/conversations", tags=["Conversations"])
app.include_router(messages.router)
