// test-divided.js

var divided = require('../lib/divided');

exports['calculate'] = function( test ) {
  test.equal(divided.calculate(4), 2);
  test.equal(divided.calculate(3), 1);
  test.done();
};
