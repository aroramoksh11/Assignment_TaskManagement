import React, { useEffect, useState } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const TaskFlow = ({ tasks }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    // Log tasks to see if they are being passed correctly
    console.log("Tasks:", tasks);

    const updatedNodes = tasks.map((task, index) => ({
      id: String(task.id),
      data: { label: task.title },
      position: { x: index % 2 === 0 ? 200 : 400, y: index * 100 }, // Ensure they are spread out visually
    }));

    const updatedEdges = tasks.slice(1).map((task, index) => ({
      id: `edge-${index}`,
      source: String(tasks[index].id),
      target: String(task.id),
      type: "smoothstep",
      animated: true,
    }));

    console.log("Updated Nodes:", updatedNodes);
    console.log("Updated Edges:", updatedEdges);

    setNodes(updatedNodes);
    setEdges(updatedEdges);
  }, [tasks]);

  return (
    <div style={{ height: "90vh", border: "2px solid #42a5f5", borderRadius: 8, padding: 10 }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />
        <Controls />
        <Background color="#e3f2fd" variant="dots" />
      </ReactFlow>
    </div>
  );
};

export default TaskFlow;
