const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    res.write('This is the list of our students\n');
    const data = await countStudents(process.argv[2]);
    res.write(data);
    res.end();
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
