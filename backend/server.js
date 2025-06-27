// //Main server entry point, sets up middleware (express, cors), and connects to DB.

// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/database');
// const taskRoutes = require('./routes/taskRoutes');
// require('dotenv').config();
// //reads the .env file

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/tasks', taskRoutes);

// // Basic route for testing
// app.get('/', (req, res) => {
//   res.json({ message: 'Task Manager API is running!' });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


//Main server entry point, sets up middleware (express, cors), and connects to DB.
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();
//reads the .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware - Updated CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000', // for local development
    'http://localhost:3001', // alternative local port
    'https://localhost:3000', // for local development with https
    'https://task-manager-pi-ruddy-31.vercel.app/',
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Task Manager API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});