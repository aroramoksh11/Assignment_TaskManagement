import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, TextField, Card, CardContent, Typography, Grid } from "@mui/material";
import ReactFlow, { Background, Controls, applyNodeChanges, applyEdgeChanges, Handle } from "reactflow";
import "reactflow/dist/style.css";
import dagre from "dagre";

const API_URL = "http://127.0.0.1:8000/tasks";

const graph = new dagre.graphlib.Graph();
graph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes, edges) => {
  graph.setGraph({ rankdir: "TB" });

  nodes.forEach((node) => graph.setNode(node.id, { width: 150, height: 50 }));
  edges.forEach((edge) => graph.setEdge(edge.source, edge.target));

  dagre.layout(graph);

  return {
    nodes: nodes.map((node) => ({
      ...node,
      position: graph.node(node.id),
    })),
    edges,
  };
};

const CustomNode = ({ data }) => (
  <div style={{ padding: 10, borderRadius: 10, background: "#1976d2", color: "white", textAlign: "center" }}>
    {data.label}
    <Handle type="source" position="right" />
    <Handle type="target" position="left" />
  </div>
);

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [editTask, setEditTask] = useState(null);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get(API_URL).then((response) => {
      setTasks(response.data);
      updateFlowchart(response.data);
    });
  };

  const handleAddTask = () => {
    if (!newTask.title.trim() || !newTask.description.trim()) return;
    axios.post(API_URL, newTask).then(() => {
      fetchTasks();
      setNewTask({ title: "", description: "" });
    });
  };

  const handleUpdateTask = () => {
    if (!editTask || !editTask.title.trim() || !editTask.description.trim()) return;
    axios.put(`${API_URL}/${editTask.id}`, editTask).then(() => {
      fetchTasks();
      setEditTask(null);
    });
  };

  const handleDeleteTask = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      fetchTasks();
    });
  };

  const updateFlowchart = (tasks) => {
    let newNodes = tasks.map((task, index) => ({
      id: task.id.toString(),
      type: "custom",
      data: { label: `${task.title}: ${task.description}` },
      position: { x: 100, y: index * 100 },
    }));

    let newEdges = [];
    for (let i = 1; i < newNodes.length; i++) {
      newEdges.push({ id: `e${i - 1}-${i}`, source: newNodes[i - 1].id, target: newNodes[i].id });
    }

    const layouted = getLayoutedElements(newNodes, newEdges);
    setNodes(layouted.nodes);
    setEdges(layouted.edges);
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Task Manager
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <TextField
            label="Task Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Task Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={handleAddTask}>
            Add Task
          </Button>
        </Grid>
      </Grid>

      {editTask && (
        <Grid container spacing={2} alignItems="center" style={{ marginTop: 20 }}>
          <Grid item xs={3}>
            <TextField
              label="Edit Title"
              value={editTask.title}
              onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Edit Description"
              value={editTask.description}
              onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="success" onClick={handleUpdateTask}>
              Save Changes
            </Button>
            <Button variant="contained" color="secondary" onClick={() => setEditTask(null)} style={{ marginLeft: 10 }}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      )}

      {tasks.map((task) => (
        <Card key={task.id} style={{ marginTop: 20, padding: 10 }}>
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <Typography>{task.description}</Typography>
            <Button variant="outlined" color="primary" onClick={() => setEditTask(task)}>
              Edit
            </Button>
            <Button variant="outlined" color="error" onClick={() => handleDeleteTask(task.id)} style={{ marginLeft: 10 }}>
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}

      <Typography variant="h5" gutterBottom style={{ marginTop: 30 }}>
        Task Visualization
      </Typography>
      <div style={{ height: 500, border: "1px solid #ddd", borderRadius: 10 }}>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={{ custom: CustomNode }} fitView>
          <Background variant="dots" gap={12} size={1} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;