var assert = require('assert');

var fib = require('./');

var result = fib(9);
assert.equal(result, 34);

assert.throws(function(){assert(false)}, require('assert').AssertionError);
assert.throws(function(){fib(40)}, Error);
assert.throws(function(){fib(-1)}, Error);