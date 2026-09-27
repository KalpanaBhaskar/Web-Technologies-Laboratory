# MERN Stack Todo Application

A full-stack Todo application built with MongoDB, Express, React, and Node.js (MERN stack). This application demonstrates the integration of all four technologies to create a complete web application with database persistence.

## Features

- ✅ Add new tasks
- ✅ View all tasks
- ✅ Mark tasks as completed/incomplete
- ✅ Delete tasks
- ✅ Real-time data synchronization with MongoDB
- ✅ Responsive design
- ✅ Modern UI with gradient styling

## Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **CORS** - Cross-Origin Resource Sharing support

### Frontend
- **React** - JavaScript library for building user interfaces
- **Create React App** - React application bootstrapping tool
- **CSS3** - Styling with modern CSS features

## Project Structure

```
week_8/
├── backend/
│   ├── server.js          # Express server and API routes
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js      # Form component for adding tasks
│   │   │   ├── TaskList.js      # List component for displaying tasks
│   │   │   └── TaskItem.js      # Individual task item component
│   │   ├── App.js              # Main React component
│   │   ├── App.css             # Application styles
│   │   └── index.js            # React entry point
│   └── package.json           # Frontend dependencies
└── README.md                  # This file
```

## Prerequisites

Before running this application, ensure you have the following installed:

1. **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
2. **MongoDB** - [Download here](https://www.mongodb.com/try/download/community)
3. **npm** (comes with Node.js)

## Installation & Setup Instructions

### 1. Install MongoDB

Make sure MongoDB is installed and running on your system:

**Windows:**
- Download MongoDB from the official website
- Install and start MongoDB service
- By default, MongoDB runs on `mongodb://localhost:27017`

**Verify MongoDB is running:**
```bash
mongod
```

### 2. Install Backend Dependencies

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

### 3. Configure Backend Environment Variables

The `.env` file in the backend directory contains:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-todo
```

You can modify these values if needed:
- `PORT`: The port on which the backend server will run
- `MONGODB_URI`: Your MongoDB connection string

### 4. Install Frontend Dependencies

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

## Running the Application

### Option 1: Run Both Servers Separately (Recommended for Development)

**Terminal 1 - Start Backend Server:**
```bash
cd backend
npm start
```

You should see: `Server is running on port 5000`

**Terminal 2 - Start Frontend Server:**
```bash
cd frontend
npm start
```

The application will open automatically at `http://localhost:3000`

### Option 2: Run with Development Tools

For automatic server restart during development:

**Backend (with nodemon):**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm start
```

## API Endpoints

The backend server provides the following REST API endpoints:

### GET /api/todos
- **Description**: Fetch all tasks from the database
- **Response**: Array of task objects
- **Example**:
```json
[
  {
    "_id": "650a1b2c3d4e5f6g7h8i9j0k",
    "task": "Complete MERN project",
    "completed": false,
    "createdAt": "2023-09-18T10:30:00.000Z"
  }
]
```

### POST /api/todos
- **Description**: Create a new task
- **Request Body**:
```json
{
  "task": "New task description",
  "completed": false
}
```
- **Response**: Created task object

### PUT /api/todos/:id
- **Description**: Update a task (mark as completed/incomplete)
- **Request Body**:
```json
{
  "completed": true
}
```
- **Response**: Updated task object

### DELETE /api/todos/:id
- **Description**: Delete a task
- **Response**: Success message

## How to Use the Application

1. **Open the Application**: Navigate to `http://localhost:3000` in your browser
2. **Add a Task**: Type a task in the input field and click "Add Task"
3. **Complete a Task**: Click the checkbox next to a task to mark it as completed
4. **Delete a Task**: Click the "Delete" button to remove a task
5. **View Tasks**: All tasks are displayed in a list, sorted by creation date

## Troubleshooting

### Backend Connection Issues

**Problem**: "MongoDB connection error"
- **Solution**: Ensure MongoDB is running. Check if MongoDB service is started.

**Problem**: "EADDRINUSE: address already in use"
- **Solution**: Either stop the process using port 5000 or change the PORT in `.env` file.

### Frontend Connection Issues

**Problem**: "Error fetching tasks"
- **Solution**: Ensure the backend server is running on port 5000.

**Problem**: CORS errors
- **Solution**: The backend has CORS enabled. If you still face issues, check the CORS configuration in `server.js`.

### MongoDB Issues

**Problem**: MongoDB not connecting
- **Solution**: 
  - Verify MongoDB is installed and running
  - Check the connection string in `.env`
  - Ensure MongoDB is accessible on the specified port

## Development Notes

### Backend Architecture
- Express.js server with RESTful API design
- Mongoose ODM for MongoDB interactions
- CORS enabled for cross-origin requests
- Environment variables for configuration

### Frontend Architecture
- React functional components with hooks
- Component-based architecture:
  - `App.js`: Main container with state management
  - `TaskForm.js`: Form for adding new tasks
  - `TaskList.js`: Container for task items
  - `TaskItem.js`: Individual task display
- State management using React hooks (`useState`, `useEffect`)
- Async/await for API calls
- Error handling for user feedback

### Database Schema
```javascript
{
  task: String (required),
  completed: Boolean (default: false),
  createdAt: Date (default: current date)
}
```

## Future Enhancements

- User authentication and authorization
- Task categories and tags
- Due dates and reminders
- Task priority levels
- Search and filter functionality
- Drag and drop task reordering
- Dark mode theme
- Export tasks to different formats

## License

This project is created for educational purposes as part of the Web Technologies Laboratory.

## Author

Developed as a MERN stack learning project implementing full-stack web development concepts.
