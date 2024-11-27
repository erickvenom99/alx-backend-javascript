const fs = require('fs');

/**
 * Module read and count number of student in each field in CSV file asynchronously.
 * @param {string} path - Path to CSV file.
 * @returns {Promise} - A Promise that resolves or reject with an error
 */
const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.toString().split('\n');
      const students = lines.slice(1).filter(line => line.trim() !== '');
      const totalStudents = students.length;
      console.log(`Number of students: ${totalStudents}`);

      const fields = {};

      for (const line of students) {
        const student = line.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = {
            count: 0,
            list: [],
          };
        }
        fields[student[3]].count += 1;
        fields[student[3]].list.push(student[0]);
      }

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const { count, list } = fields[field];
          console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
        }
      }
      
      resolve();
    });
  });
};

module.exports = countStudents;
