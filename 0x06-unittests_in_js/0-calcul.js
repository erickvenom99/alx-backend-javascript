#!/usr/bin/node
/**
 * Module sum two numbers
 * arg a: the first argument
 * arg b: the second argument
 */
const calculateNumber = (a, b) => {
  const intA = a >= 0 ? Math.round(a) : Math.floor(a);
  const intB = b >= 0 ? Math.round(b) : Math.floor(b);
  return intA + intB;
};

module.exports = calculateNumber;
