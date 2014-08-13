//Calculate the nth fibonacci number
function fib(n){
	if (n === 0 || n === 1) return n;
	return fib(n-1) + fib(n-2);
}

//The command line interface to the function
var arg = process.argv[2];
var n = parseInt(arg);
console.log('Fibonacci number:', n, fib(n));