# **Task Manager - MERN Stack Application**

A collaborative task management system built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
This application allows teams to create, assign, track, and manage tasks with real-time updates and filtering capabilities.

---

## 🚀 **Features**

- **Task Management**: Create, read, update, and delete tasks  
- **Team Collaboration**: Assign tasks to team members  
- **Status Tracking**: Track task progress (To Do, In Progress, Done)  
- **Smart Filtering**: Filter tasks by status and assignee  
- **Responsive Design**: Works seamlessly on desktop and mobile devices  
- **Real-time Updates**: Instant UI updates after any operation  
- **Form Validation**: Client and server-side validation  
- **Clean UI**: Modern, intuitive user interface  

---

## 🛠️ **Tech Stack**

### **Backend**
- **Node.js** – Runtime environment  
- **Express.js** – Web framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB object modeling  

### **Frontend**
- **React.js** – Frontend library  
- **Axios** – HTTP client  
- **CSS3** – Styling with modern features  

---

## 📋 **Prerequisites**

Before running this application, make sure you have the following installed:

- **Node.js** (v16.0.0 or higher) – [Download here](https://nodejs.org)  
- **MongoDB (Community Edition)** – [Download here](https://www.mongodb.com/try/download/community)  
- **Git (optional)** – [Download here](https://git-scm.com)  
- **VS Code (recommended)** – [Download here](https://code.visualstudio.com)  

### **Recommended VS Code Extensions**
- ES7+ React/Redux/React-Native snippets  
- Auto Rename Tag  
- Bracket Pair Colorizer  
- MongoDB for VS Code  

---

## 🏗️ **Project Structure**

task-manager/
├── backend/
│ ├── config/
│ │ └── database.js
│ ├── controllers/
│ │ └── taskController.js
│ ├── models/
│ │ └── Task.js
│ ├── routes/
│ │ └── taskRoutes.js
│ ├── server.js
│ ├── package.json
│ └── .env
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── TaskForm.js
│ │ │ ├── TaskList.js
│ │ │ ├── TaskItem.js
│ │ │ └── FilterBar.js
│ │ ├── services/
│ │ │ └── api.js
│ │ ├── App.js
│ │ ├── App.css
│ │ └── index.js
│ ├── package.json
│ └── .env
└── README.md


---

## 🚀 **Installation & Setup**

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager

 2. Backend Setup
•  Navigate to backend directory
cd backend

•  Install dependencies
npm install

•  Create environment file .env

MONGODB_URI=mongodb://localhost:27017/taskmanager
PORT=5000
NODE_ENV=development

•  Start MongoDB

Windows:
net start MongoDB  # (Run as Administrator)

npm start
📍 Backend runs at: http://localhost:5000

✅ 3. Frontend Setup
🔹 Navigate to frontend directory
cd frontend

🔹 Install dependencies
npm install

🔹 Create environment file .env
REACT_APP_API_URL=http://localhost:5000/api

🔹 Start the frontend application: npm start

📍 Frontend runs at: http://localhost:3000
