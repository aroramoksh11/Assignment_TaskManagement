# React & FastAPI Task Manager



## 🚀 Overview

This project is a **full-stack Task Manager** built using **React.js** with **Material UI** for the frontend and **FastAPI** for the backend. The frontend allows users to dynamically add, edit, and delete tasks, which are visualized using **React Flow**. The backend provides a REST API with full **CRUD** operations and stores task data in an **SQLite** database.

---

## 🎯 Features

### Frontend

✅ Built with **React.js** and **Material UI**\
✅ Uses **React Flow** to visualize tasks as nodes\
✅ Dynamically add, edit, and delete tasks\
✅ Fetches and updates task data from the backend API\
✅ Fully responsive design

### Backend

✅ **FastAPI** backend with RESTful API\
✅ **SQLite database** for task storage\
✅ **CRUD operations** (Create, Read, Update, Delete)\
✅ Implements error handling and best practices\
✅ Well-documented API using Swagger UI

---

## 📂 Project Structure

```bash
Internship_7Seas/
│── frontend/                 # React Frontend
│   ├── src/
│   │   ├── components/       # UI Components
│   │   ├── pages/            # Page Views
│   │   ├── App.js            # Main Component
│   │   ├── index.js          # Entry Point
│   ├── package.json          # Dependencies
│   ├── public/
│── fastapi-backend/          # FastAPI Backend
│   ├── main.py               # FastAPI Entry Point
│   ├── models.py             # Database Models
│   ├── database.py           # Database Connection
│   ├── crud.py               # CRUD Operations
│   ├── routes.py             # API Routes
│   ├── schemas.py            # Data Schemas
│   ├── tasks.db              # SQLite Database
│   ├── requirements.txt      # Backend Dependencies
│── README.md                 # Project Documentation
```

---

## 🛠 Installation & Setup

### 1️⃣ Backend (FastAPI)

#### **Prerequisites:**

- Python 3.x (Download from [Python.org](https://www.python.org/downloads/))
- Virtual Environment (Optional but recommended)

#### **Libraries Required:**

To run the FastAPI backend, install the following libraries:

- `fastapi`
- `uvicorn`
- `sqlite3`
- `pydantic`

#### **Setup (Windows & Mac/Linux):**

```sh
cd fastapi-backend
python -m venv .venv  # Create virtual environment (optional)
source .venv/bin/activate  # Activate (Mac/Linux)
.venv\Scripts\activate  # Activate (Windows)
pip install -r requirements.txt  # Install dependencies
uvicorn main:app --reload  # Start FastAPI server
```

- **API Base URL:** `http://127.0.0.1:8000`
- **Interactive Docs:** Visit `http://127.0.0.1:8000/docs`

### 2️⃣ Frontend (React.js)

#### **Prerequisites:**

- Node.js & npm (Download from [Node.js](https://nodejs.org/))

#### **Libraries Required:**

To run the React frontend, install the following packages:

- `react`
- `react-dom`
- `@mui/material`
- `react-flow-renderer`
- `axios`

#### **Setup (Windows & Mac/Linux):**

```sh
cd frontend
npm install  # Install dependencies
npm start  # Start React app
```

- **App URL:** `http://localhost:3000`

---

## 🔗 API Endpoints

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| GET    | `/tasks`      | Get all tasks     |
| POST   | `/tasks`      | Create a new task |
| GET    | `/tasks/{id}` | Get task by ID    |
| PUT    | `/tasks/{id}` | Update task       |
| DELETE | `/tasks/{id}` | Delete task       |

---

## 🎮 Usage

1️⃣ Start the backend using FastAPI.\
2️⃣ Run the frontend React app.\
3️⃣ Add tasks using the UI, and they will be dynamically displayed using React Flow.\
4️⃣ Perform CRUD operations from both the frontend and API endpoints.

---

## 🛠 Technologies Used

### **Frontend:**

- ⚛️ React.js
- 🎨 Material UI
- 🔀 React Flow

### **Backend:**

- 🚀 FastAPI
- 🗄 SQLite

---

## 🚀 Future Enhancements

- 🔐 Implement authentication for user-specific tasks
- 🗄 Use PostgreSQL instead of SQLite for scalability
- 🎨 Improve UI/UX with better animations
- 📅 Implement due dates and reminders for tasks

---

