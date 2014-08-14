//Calculate the nth fibonacci number
function fib(n){
	if (n === 0 || n === 1) return n;
	return fib(n-1) + fib(n-2);
}

var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

//The command line interface to the function
var arg = argv._;
var n = parseInt(arg);
if (n < 0) throw 'argument must be positive: ' + n;
if (n > 40) throw 'argument must be less than 40 because this is very inefficient code: ' + n;

//Everything's good: let's do it
console.log('Fibonacci number:', n, fib(n));