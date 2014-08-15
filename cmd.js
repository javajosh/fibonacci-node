var fib = require('./');
var assert = require('assert');

//The command line interface to the function
var arg = process.argv[2];
var n = parseInt(arg);

//Everything's good: let's do it
console.log('Fibonacci number:', n, fib(n));