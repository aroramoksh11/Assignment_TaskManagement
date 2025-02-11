const API_URL = "http://127.0.0.1:8000"; // Ensure FastAPI is running

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

        return await response.json();
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return []; // Prevents crash
    }
};

export const createTask = async (task) => {  // ✅ Fix: Ensure createTask exists
    try {
        const response = await fetch(`${API_URL}/tasks/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error creating task:", error);
        return null;
    }
};
