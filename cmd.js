#!/usr/bin/env node

'use strict';
var fib = require('./');

//The command line interface to the function
var arg = process.argv[2];
var n = parseInt(arg);

//Everything's good: let's do it
console.log('Fibonacci number:', n, fib(n));
