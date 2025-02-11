import React, { useState, useEffect } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const API_URL = "http://127.0.0.1:8000"; // Backend FastAPI URL

const TaskVisualization = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${API_URL}/tasks/`);
      if (!response.ok) throw new Error("Failed to fetch tasks");
      const data = await response.json();
      
      // Convert tasks to nodes
      const nodes = data.map((task, index) => ({
        id: task.id.toString(),
        position: { x: 100, y: index * 100 },
        data: { label: `${task.title} (${task.completed ? "✔️" : "❌"})` },
      }));

      setTasks(nodes);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <div style={{ width: "100%", height: "500px", border: "1px solid black" }}>
      <ReactFlow nodes={tasks}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default TaskVisualization;
