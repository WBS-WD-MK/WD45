console.log('Hello World');
const axios = require('axios');
const { writeFile, readFile } = require('fs/promises');
const http = require('http');
const fetchPosts = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await res.json();
    saveToFile('posts.txt', JSON.stringify(res.data));
    return res.data;
  } catch (error) {}
};

const saveToFile = async (fileName, data) => {
  try {
    await writeFile(fileName, data);
  } catch (error) {
    console.log(error);
  }
};
const readFromFile = async fileName => {
  try {
    const res = await readFile(fileName);
    return JSON.parse(res);
  } catch (error) {
    console.log(error);
  }
};
fetchPosts();
readFromFile('posts.txt');

const server = http.createServer(function (request, response) {
  console.log(`The server have received a ${request.method} on the path of ${request.url}`);

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  if (request.method === 'GET') {
    if (request.url === '/') {
      response.end('Hello World\n');
    } else if (request.url === '/posts') {
      fetchPosts()
        .then(data => response.end(JSON.stringify(data)))
        .catch(e => console.log(e));
    } else if (request.url === '/read-file') {
      readFromFile('posts.txt')
        .then(data => response.end(JSON.stringify(data)))
        .catch(e => console.log(e));
    }
  }
});
server.listen(8000);
console.log('Server running at http://localhost:8000');
