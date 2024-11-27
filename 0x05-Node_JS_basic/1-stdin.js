#!/usr/bin/node
/**
 * Module is an executable program on the command line
 * It accepts a name input and displays a default string
 * and the provided name.
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data !== null) {
    const yourname = data.trim();
    if (yourname !== '') {
      process.stdout.write(`Your name is: ${yourname}\n`);
    }
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});