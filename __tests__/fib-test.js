jest.dontMock('../index');

describe('fib', function(){
	it('calculates the nth fibonacci number', function(){
		var fib = require('../index');
		expect(fib(9)).toBe(34);
	});
});