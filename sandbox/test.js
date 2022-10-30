// console.log(global);

// setTimeout(() => {
//   console.log("what's my name?");
// }, 3000);

// const int = setInterval(() => {
//   console.log('📝 Take notes godswill');
// }, 2000);

// setTimeout(() => {
//   clearInterval(int);
// }, 11000);

// const os = require('os');
// const { people } = require('./people');

// console.log(os.platform(), os.homedir());

// const { people, ages } = require('./people');

// console.log(people, ages);

// Working w/ Files
// const fs = require('fs');

// read
// fs.readFile('

// write
// fs.writeFile('./note.md', 'Hello', () => {
//   console.log('successful');
// });
// directories
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('created');
//   });
// } else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('deleted');
//   });
// }
// delete files
// if (fs.existsSync('./note.md')) {
//   fs.unlink('./note.md', (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('file deleted');
//     }
//   });
// } else {
//   fs.writeFile('./note.md', 'yuper', () => {
//     console.log('file created');
//   });
// }

// streaming data
const fs = require('fs');

const readStream = fs.createReadStream('./notes.md', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./notex.md');

readStream.on('data', (chunk) => {
  console.log('--- READING CHUNK ---');
  console.log(chunk);

  writeStream.write('\n WRITING CHUNK \n');
  writeStream.write(chunk);
});

readStream.pipe(writeStream);
