var assert = require('assert');

//Calculate the nth fibonacci number, linearly
function fib(n){
	assert( n > 0, 'argument must be positive');
	assert( n < 40, 'argument must be less than 40 because this is very inefficient code!');
	var n1 = 0;
	var n2 = 1;
	var r = 1;
	for (var i = 0; i < n; i++){
		r = n1 + n2;
		n2 = n1;
		n1 = r;
	}
	return r;
}

module.exports = fib;
