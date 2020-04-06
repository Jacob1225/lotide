const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!Array.isArray(results[sentence[i]])) {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
        
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;

//TEST CODE
//console.log(letterPositions("hello"));
//assertArraysEqual(letterPositions("hello").e, [1]);
