import React, { useState } from "react";
import { Button, List, ListItem, ListItemText, Card, Typography } from "@mui/material";
import { addTask, updateTask, deleteTask } from "../api/tasks"; // Assuming you have these API methods

const TaskList = ({ tasks = [], onTaskAdded, onTaskUpdated, onTaskDeleted }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = async () => {
    if (!taskTitle.trim()) return; // Don't allow empty task names
    const newTask = { title: taskTitle, description: "" };
    try {
      const addedTask = await addTask(newTask);
      onTaskAdded(addedTask); // Update parent state immediately
      setTaskTitle(""); // Clear input field
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleUpdateTask = async (taskId, newTitle) => {
    if (!newTitle.trim()) return;
    try {
      const updatedTask = await updateTask(taskId, { title: newTitle });
      onTaskUpdated(updatedTask); // Update parent state
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      onTaskDeleted(taskId); // Update parent state
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <Card elevation={2} sx={{ padding: 2, marginBottom: 3 }}>
      <Typography variant="h6" gutterBottom>
        Tasks
      </Typography>
      <List>
        <ListItem>
          <input
            type="text"
            placeholder="New task"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            style={{
              padding: "8px",
              width: "80%",
              marginRight: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <Button variant="contained" onClick={handleAddTask} sx={{ height: "40px" }}>
            Add Task
          </Button>
        </ListItem>

        {tasks.map((task) => (
          <ListItem key={task.id} sx={{ display: "flex", justifyContent: "space-between" }}>
            <ListItemText primary={task.title} secondary={task.description} />
            <Button
              variant="outlined"
              color="warning"
              onClick={() => handleUpdateTask(task.id, prompt("Edit task title", task.title))}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default TaskList;