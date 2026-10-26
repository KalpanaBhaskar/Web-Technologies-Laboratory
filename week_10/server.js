const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = 3000;
const DATA_FILE = './students.json';

// 1. Create the HTTP Server
const server = http.createServer((req, res) => {
    // 2. Parse the URL (The 'true' argument parses the query string into an object)
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    // Route 1: Home Page
    if (path === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h2>Student Information Server</h2>
            <p>Available endpoints:</p>
            <ul>
                <li><a href="/students">/students</a> - View all students</li>
                <li><a href="/students?id=1">/students?id=1</a> - View student with ID 1</li>
            </ul>
        `);
    }
    // Route 2: Students API (Handles both all students and specific student by ID)
    else if (path === '/students') {
        // 3. Read the data file asynchronously using the File System (fs) module
        fs.readFile(DATA_FILE, 'utf8', (err, data) => {
            if (err) {
                // Handle file read errors
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Internal Server Error: Cannot read data' }));
                return;
            }

            const students = JSON.parse(data);

            // Check if the user passed an 'id' query parameter (e.g., ?id=2)
            if (query.id) {
                const studentId = parseInt(query.id);
                const student = students.find(s => s.id === studentId);

                if (student) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(student));
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Student not found' }));
                }
            } else {
                // If no ID is provided, return the entire list of students
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    }
    // Route 3: Handle unknown paths (404)
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: Page Not Found');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});