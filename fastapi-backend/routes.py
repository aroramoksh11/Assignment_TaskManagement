from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

# Task Schema Definitions
class TaskSchema(BaseModel):  # Defines the structure of a task
    id: int
    title: str
    description: str
    completed: bool

class TaskCreate(BaseModel):  # Schema for creating a new task
    title: str
    description: str
    completed: bool = False

class TaskUpdate(BaseModel):  # Schema for updating an existing task
    title: str
    description: str
    completed: bool

# Mock database (Replace with a real DB in production)
tasks = [
    {"id": 1, "title": "Task 1", "description": "First task", "completed": False},
    {"id": 2, "title": "Task 2", "description": "Second task", "completed": True},
]

# Fetch all tasks
@router.get("/tasks/", response_model=List[TaskSchema])
async def get_tasks():
    return tasks

# Create a new task
@router.post("/tasks/", response_model=TaskSchema)
async def create_task(task: TaskCreate):
    new_task = {"id": len(tasks) + 1, **task.dict()}
    tasks.append(new_task)
    return new_task

# Update a task
@router.put("/tasks/{task_id}", response_model=TaskSchema)
async def update_task(task_id: int, updated_task: TaskUpdate):
    for task in tasks:
        if task["id"] == task_id:
            task.update(updated_task.dict())
            return task
    raise HTTPException(status_code=404, detail="Task not found")

# Delete a task
@router.delete("/tasks/{task_id}", response_model=dict)
async def delete_task(task_id: int):
    global tasks
    tasks = [task for task in tasks if task["id"] != task_id]
    return {"message": "Task deleted successfully"}
