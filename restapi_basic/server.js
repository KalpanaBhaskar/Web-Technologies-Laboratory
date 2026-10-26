// server.js (Node.js / Express)
const express = require('express');
const app = express();

// Middleware to parse incoming JSON bodies and serve static HTML files
app.use(express.json()); 
app.use(express.static('./')); 

// In-memory array acting as a mock database
let students = [
    { id: 1, name: 'Alice Smith', course: 'Software Engineering' },
    { id: 2, name: 'Bob Johnson', course: 'Data Science' }
];

// API Endpoint for Q1 (GET)
app.get('/api/students', (req, res) => {
    // Returns HTTP 200 OK by default
    res.status(200).json(students);
});

// API Endpoint for Q2 (POST)
app.post('/api/students', (req, res) => {
    const { name, course } = req.body;
    
    // Check for missing data and return 400 Bad Request if so
    if (!name || !course) {
        return res.status(400).json({ error: 'Name and Course are required fields.' });
    }
    
    const newStudent = { 
        id: students.length + 1, 
        name: name, 
        course: course 
    };
    
    students.push(newStudent);
    
    // Return HTTP 201 Created and send success message with the new record
    res.status(201).json({ message: 'Student registered successfully', student: newStudent });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});