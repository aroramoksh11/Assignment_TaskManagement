from sqlalchemy.orm import Session
from models import Task
from schemas import TaskCreate, TaskUpdate

# Create a new task in the database
def create_task(db: Session, task: TaskCreate):
    db_task = Task(**task.dict())  # Convert task schema to Task model
    db.add(db_task)  # Add new task to session
    db.commit()  # Commit the transaction
    db.refresh(db_task)  # Refresh the task to get any auto-generated fields
    return db_task

# Get all tasks from the database
def get_tasks(db: Session):
    return db.query(Task).all()  # Query all tasks

# Get a specific task by its ID
def get_task(db: Session, task_id: int):
    return db.query(Task).filter(Task.id == task_id).first()  # Query task by ID

# Update an existing task
def update_task(db: Session, task_id: int, task_update: TaskUpdate):
    db_task = db.query(Task).filter(Task.id == task_id).first()  # Fetch task by ID
    if db_task:
        for key, value in task_update.dict().items():  # Update task fields
            setattr(db_task, key, value)
        db.commit()  # Commit the transaction
        db.refresh(db_task)  # Refresh to get the updated task
    return db_task

# Delete a task from the database
def delete_task(db: Session, task_id: int):
    db_task = db.query(Task).filter(Task.id == task_id).first()  # Fetch task by ID
    if db_task:
        db.delete(db_task)  # Delete task
        db.commit()  # Commit the transaction
    return db_task
