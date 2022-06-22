# What is Node.js?
Node allows us to run JS on the serverside and directly on computers.

Computers understand machine code

V8 engine compiles JS into machine code at runtime. Its created by Google and runs in chrome by default.

V8 engine lives inside Node.js as well. Node.js can run on our computer because its built with C++. The V8 engine wrapped inside Node.js gives it extrapowers:
- Read & write files on a computer
- Connect to a DB
- Act as a server for content.

Things you'd expect a server side language to perform, Node.js does this effortlessly.

We loose aceess to DOM features of JS in Node.js because we are writing JS for the server and not for the browser.

## What would you use Node.js for?
Handle request from the browser to the server, maybe connect to the DB and formulate some kind of response and send it back to the browser.

## Why use Node.js?
- One language for FE and BE
- Many helpful third-party helper packages

## Global Object
- In the browser, the window() object is the global object with loads of properties and methods available for us to use out of the box for apps that run on the browser.

- In Node.js the global object is "global"

` console.log(global) `

## Exports and Require - Node Modules

### Exporting arrays from a file
```
const people = ['Bola', 'Kola', 'Cola', 'Pepsi'];
const ages = [20, 21, 23, 24];

module.exports = { people, ages };
```

### Importing Values into a file
```
const { people, ages } = require('./people');

console.log(people, ages);
```

## Working w/ the File System Core Module

Firstly, we'll import the file system module
` const fs = require('fs'); `

Next, Let's read data from a file
```
fs.readFile('./notes.md', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
```

Great, we'll see how to write to files next, this code will create a new file if the referenced file does not exist
```
fs.writeFile('./note.md', 'I am a new file', () => {
    console.log('created a new file succesfully')
})
```

Awesome, now lets delete that file if it already exist, or create it if it does not exist
```
if (fs.existsSync('./note.md')) {
  fs.unlink('./note.md', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('file deleted');
    }
  });
} else {
  fs.writeFile('./note.md', 'I am a new file', () => {
    console.log('file created');
  });
}
```

Next, lets work with directories. We'll see how to create a new directory or delete if it already exist.
```
if (fs.existsSync('./new-folder')) {
  fs.rmdir('./new-folder', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('folder deleted');
    }
  });
} else {
  fs.mkdir('./new-folder', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('folder deleted');
    }
  });
}
```

### Streams
For large files, its best you use streams. This would enable you to use the available data while its still downloading. Hence, you wouldn't have to wait for the large to complete downloading (which might take some time) before you are able to start using its data.
```
const fs = require('fs');

const readStream = fs.createReadStream('./notes.md', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./notex.md');

readStream.on('data', (chunk) => {
  console.log('--- READING CHUNK ---');
  console.log(chunk);

  writeStream.write('\n WRITING CHUNK \n');
  writeStream.write(chunk);
});
```

### Pipe with Streams
Using the above code example might be verbose. If you wish to pass to the writStream a readable data, then you might consider using the pipe()


## Setting up a basic server
The following establishes a nodejs server on localhost:3000 and responds with an html content upon any server request
```
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  res.write('<h1>hey there</h1>');

  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port:3000');
});

```

## Server responds to specific urls

In the following example, the server checks each request URl and sends a response by loading the different HTML files.

```
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    default:
      path += '404.html';
      break;
  }

  //   res.write('<h1>hey there</h1>');
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write();
      res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port:3000');
});

```
## Redirects
```
case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
```

## Status Codes
- 100 > Informational responses
- 200 > Success Codes
- 300 > Redirects
- 400 > Client error
- 500 > Server error

## Middleware
Any code that runs between the request and response cycle.
`app.use()`

## Schema
Defines the structure of our document

## Model
Wraps the schema, gives us an interface which we use to communicate with the database collection for that document type

## Descending Order
```
Blog.find()
    .sort({ createdAt: -1 })
```

Sorts data coming from DB in descending order

## For accepting static files and working w/ form data
```
// static files

app.use(express.static('./views/assets'));

// for accepting form data

app.use(express.urlencoded({ extended: true })); 
```