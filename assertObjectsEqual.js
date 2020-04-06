const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

//TEST CODE
//let a = { a: '1', b: 2 };
//let b = { b: 2, a: '1' };

//assertObjectsEqual(a, b);
