const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, value) {
  const properties = Object.keys(obj);
  for (let prop of properties) {
    if (obj[prop] === value) {
      return prop;
    }
  }
};

module.exports = findKeyByValue;

//TEST CODE
//const bestTVShowsByGenre = {
  //sci_Fi: "The Expanse",
  //comedy: "Brooklyn Nine-Nine",
  //drama:  "The Wire"
//};
//findKeyByValue(bestTVShowsByGenre, "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);