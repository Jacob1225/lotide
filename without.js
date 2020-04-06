
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const without = function(source, itemsToRemove) {
  let subset = [];
  for (let num of source) {
    if (itemsToRemove.indexOf(num) === -1) {
      subset.push(num);
    }
  }
  return subset;
};

module.exports = without;

//TEST CODE
//const words = ["hello", "world", "lighthouse"];
//console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]