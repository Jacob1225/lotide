const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//TEST CODE
//const words = ["ground", "control", "to", "major", "tom"];
//const results1 = map(words, word => word[0]);
//console.log(results1);

