const http = require('http');

const postData = JSON.stringify({
  task: 'Test task from API',
  completed: false
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('POST Response:', data);
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(postData);
req.end();
