const API_URL = "http://127.0.0.1:8000/tasks/";

// Fetch all tasks
export const fetchTasks = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
};

// Add a new task
export const addTask = async (task) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  if (!response.ok) throw new Error("Failed to add task");
  return response.json(); // Return the newly added task
};

// Update a task
export const updateTask = async (taskId, updatedTask) => {
  const response = await fetch(`${API_URL}${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  });

  if (!response.ok) throw new Error("Failed to update task");
  return response.json(); // Return the updated task
};

// Delete a task
export const deleteTask = async (taskId) => {
  const response = await fetch(`${API_URL}${taskId}`, { method: "DELETE" });

  if (!response.ok) throw new Error("Failed to delete task");
};
