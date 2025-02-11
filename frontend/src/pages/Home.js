import React, { useState, useEffect } from "react";
import { Container, Typography, Paper } from "@mui/material";
import TaskList from "../components/TaskList";
import TaskFlow from "../components/TaskFlow";
import { fetchTasks } from "../api/tasks"; // ✅ Import API

const Home = () => {
  const [tasks, setTasks] = useState([]);

  // ✅ Fetch tasks on mount
  useEffect(() => {
    loadTasks();
  }, []);

  // ✅ Function to load tasks from backend
  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // ✅ When a task is added, fetch the updated task list
  const handleTaskAdded = async () => {
    await loadTasks(); // ✅ Re-fetch tasks from backend
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Task Manager</Typography>

      {/* Task List Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <TaskList onTaskAdded={handleTaskAdded} /> {/* ✅ Pass callback */}
      </Paper>

      {/* Task Visualization */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>Task Visualization</Typography>
        <TaskFlow tasks={tasks} />
      </Paper>
    </Container>
  );
};

export default Home;
