const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  const key = Object.keys(object);

  for (item of key) {
    if(callback(object[item])) {
      return item;
    }
  }
};

module.exports = findKey;

//TEST CODE

//assertEqual((findKey({
 // "Blue Hill": { stars: 1 },
// "Akaleri":   { stars: 3 },
//  "noma":      { stars: 2 },
// "elBulli":   { stars: 3 },
//  "Ora":       { stars: 2 },
//  "Akelarre":  { stars: 3 }
//}, x => x.stars === 2)), 'noma');