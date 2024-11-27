const http = require('http');
const countStudents = require('./3-read_file_async');
const PORT = 1245;

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const database = 'database.csv';
      await countStudents(database);
    } catch (error) {
      res.write(error.message); 
    } finally { 
      res.end();
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
