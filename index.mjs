import { createServer } from 'node:http';
import fs from 'node:fs';

const hostname = '0.0.0.0';
const port = 80;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
