const http = require('node:http');

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const data = {
    message: 'Hello, Node!asdasdas',
    timestamp: new Date().toISOString(),
  };
  const jsonData = JSON.stringify(data);
  res.end(jsonData);
});

server.listen(PORT, () => {
  console.log(`Server running on :${PORT}`);
});
