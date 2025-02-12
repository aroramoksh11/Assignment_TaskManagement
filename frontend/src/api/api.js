const API_URL = "http://127.0.0.1:8000"; // Ensure FastAPI server is running

// Fetch tasks from the server
export const fetchTasks = async () => {
    try {
        const response = await fetch(`${API_URL}/tasks/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();  // Return the task data
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return [];  // Return an empty array on error to avoid crash
    }
};

// Create a new task on the server
export const createTask = async (task) => {
    try {
        const response = await fetch(`${API_URL}/tasks/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),  // Convert task object to JSON
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();  // Return the created task data
    } catch (error) {
        console.error("Error creating task:", error);
        return null;  // Return null if there's an error
    }
};
