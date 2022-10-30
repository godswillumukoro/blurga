
 WRITING CHUNK 
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

## Working w/ the File System

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

## Working w/ the File System

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
