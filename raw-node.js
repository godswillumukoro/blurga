const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  let path = './views/';
  let statusCode;
  switch (req.url) {
    case '/':
      path += 'index.html';
      statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      statusCode = 404;
      break;
  }

  //   res.write('<h1>hey there</h1>');
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write();
      res.statusCode = statusCode;
      res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port:3000');
});
