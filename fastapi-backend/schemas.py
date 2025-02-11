from pydantic import BaseModel

class TaskSchema(BaseModel):
    id: int
    title: str
    description: str
    completed: bool

    class Config:
        from_attributes = True  # If using ORM models
