const http = require('http');

// Test GET request
const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/todos',
  method: 'GET'
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('GET Response:', data);
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.end();
