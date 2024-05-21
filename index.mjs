import { createServer } from 'node:https';
import fs from 'node:fs';

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/ismailarilik.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/ismailarilik.com/fullchain.pem'),
};

const port = 80;

const server = createServer(options, (req, res) => {
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

server.listen(443, () => {
  console.log('Server running');
});
