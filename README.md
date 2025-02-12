# Full-Stack Task Management App

![GitHub Repo](https://img.shields.io/badge/Project-FullStack--TaskApp-blue?style=for-the-badge)

## 📌 Overview
This is a full-stack task management application that allows users to create, update, delete, and visualize tasks efficiently. The project is built using:

- **🖥️ FastAPI** for the backend (high-performance, lightweight, and async-ready)
- **🎨 React.js** for the frontend (modern UI with seamless API integration)
- **🗄️ SQLite** as the database (lightweight and easy-to-use)
- **📡 REST API** for structured communication between frontend and backend

---

## 🎯 Features
✅ **Full CRUD functionality for tasks**
✅ **FastAPI-powered backend with async capabilities**
✅ **React frontend with intuitive user interface**
✅ **Task visualization with interactive UI**
✅ **Lightweight and efficient database (SQLite)**
✅ **Modular and scalable project structure**

---

## 📂 Project Structure
```
Assignment--main/
│── fastapi-backend/      # Backend (FastAPI)
│   ├── main.py           # Main entry point
│   ├── database.py       # Database connection setup
│   ├── models.py         # Database models
│   ├── schemas.py        # Pydantic schemas
│   ├── routes.py         # API routes
│   ├── crud.py           # CRUD operations
│   ├── tasks.db          # SQLite database file
│   ├── requirements.txt  # Dependencies for backend
│── frontend/             # Frontend (React)
│   ├── screenshots/      #Project Screenshots # FastAPI running at 127.0.0.1:8000 ├── frontend.png # React running at localhost:3000 
│   ├── src/
│   │   ├── App.js        # Main React app component
│   │   ├── index.js      # React entry point
│   │   ├── styles.css    # Styling
│   │   ├── api/          # API calls
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   ├── package.json      # Dependencies for frontend
│── README.md             # Detailed documentation
│── .gitignore            # Git ignore rules
```

---
## 📸 Screenshots  
### 🎨 **Frontend (React Running at http://localhost:3000)**  
![Frontend Screenshot](https://github.com/aroramoksh11/Assignment-/blob/main/frontend/screenshots/Frontend.png)  

### 🖥️ **Backend (FastAPI Running at 127.0.0.1:8000)**  
![Backend Screenshot](https://github.com/aroramoksh11/Assignment-/blob/main/frontend/screenshots/Backend.png)  

## 🛠️ Prerequisites
Before running this project, ensure you have the following installed:

- **🐍 Python 3.10+**
- **📦 Node.js & npm**

---

## ⚙️ Backend Setup (FastAPI)

### 1️⃣ Navigate to the Backend Directory
```sh
cd fastapi-backend
```

### 2️⃣ Create a Virtual Environment
```sh
python -m venv venv
source venv/bin/activate   # On Windows use `venv\Scripts\activate`
```

### 3️⃣ Install Dependencies
```sh
pip install -r requirements.txt
```

### 4️⃣ Run FastAPI Server
```sh
uvicorn main:app --reload
```

📌 The API will be available at: [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## 🎨 Frontend Setup (React)

### 1️⃣ Navigate to the Frontend Directory
```sh
cd frontend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the React App
```sh
npm start
```

📌 The frontend will be available at: [http://localhost:3000](http://localhost:3000)

---

## 📡 API Endpoints

| Method | Endpoint      | Description        |
|--------|-------------|--------------------|
| GET    | /tasks      | Get all tasks      |
| POST   | /tasks      | Create a new task  |
| PUT    | /tasks/{id} | Update a task      |
| DELETE | /tasks/{id} | Delete a task      |

---

## ⚠️ Notes
- Ensure the backend is running before launching the frontend.
- Modify `.env` files (if necessary) for configuration.
- The project follows **MVC architecture** for better maintainability.

---
## 👨‍💻 Contributors
- **[Moksh Arora]** - Developer & Maintainer

🙌 Feel free to fork, contribute, or reach out for any questions!
