# React Dashboard Web App

## Overview
This is a **full-stack dashboard web application** built with **React.js** on the frontend and **Node.js + Express** on the backend, connected to **MongoDB**.  
It features **user authentication (JWT)**, **CRUD operations on tasks**, and a **responsive, interactive UI** using **TailwindCSS**.

---

## Features

### Frontend
- Built with **React.js**
- **Responsive design** using TailwindCSS
- **Authentication flow**:
  - Signup
  - Login
  - Logout
  - Protected routes (dashboard accessible only after login)
- **Dashboard**:
  - User profile display
  - Add, edit, delete tasks
  - Search and filter tasks
- **Interactive UI components**:
  - Gradient backgrounds
  - Hover effects
  - Buttons with animations
- **State management** with `useState` and `useContext`

### Backend
- Built with **Node.js + Express**
- **JWT-based authentication**
- **Password hashing** with `bcrypt`
- **MongoDB database** for storing users and tasks
- **API endpoints**:
  - `POST /api/users/signup` → Register user
  - `POST /api/users/login` → Login and receive JWT
  - `GET /api/users/profile` → Fetch user profile
  - `GET /api/tasks` → Fetch tasks
  - `POST /api/tasks` → Add task
  - `PUT /api/tasks/:id` → Update task
  - `DELETE /api/tasks/:id` → Delete task

---

## Folder Structure

dashBoard/
│
├─ backend/
│ ├─ config/db.js
│ ├─ middleware/auth.js
│ ├─ models/User.js
│ ├─ models/Task.js
│ ├─ routes/userRoutes.js
│ ├─ routes/taskRoutes.js
│ ├─ server.js
│ ├─ package.json
│
├─ frontend/
│ ├─ public/index.html
│ ├─ src/
│ │ ├─ App.jsx
│ │ ├─ api.jsx
│ │ ├─ main.jsx
│ │ ├─ index.css
│ │ ├─ index.js
│ │ ├─ pages/
│ │ │ ├─ Login.jsx
│ │ │ ├─ Signup.jsx
│ │ │ └─ Dashboard.jsx
│ │ ├─ context/AuthContext.jsx
│ │ └─ components/
│ │ ├─ ProtectedRoute.jsx
│ │ └─ Layout.jsx
│ ├─ package.json
│ └─ tailwind.config.js
│
└─ README.md

## Installation

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file with:

ini
Copy code
MONGO_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret>
PORT=8000
Start the backend server:

bash
Copy code
npm start
The server will run on http://localhost:8000.

Frontend
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the React app:

bash
Copy code
npm start


Usage
Signup a new user.
Login with your credentials.
Access the dashboard:
Add tasks
Edit or delete tasks

Search tasks
Logout using the button on the dashboard.

Tech Stack
Frontend: React.js, TailwindCSS, Axios, React Router
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt
Deployment Ready: Structured for scaling frontend-backend integration
Future Improvements
Dark/light mode toggle
Task categories & priorities
Notifications for task updates
Deploy to Vercel (frontend) and Render/Heroku (backend)
