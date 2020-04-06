const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const properties = Object.keys(object1); 
  const props = Object.keys(object2);

  if (properties.length !== props.length) {
    return false;
  } else {
    for (let key of properties) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        } 
      } else {
          if (object1[key] !== object2[key]) {
            return false;
          } 
      }
      
    }
    return true;
  }
};

module.exports = eqObjects;


//TEST CODE
//const cd = { c: "1", d: ["2", 3] };
//const dc = { d: ["2", 3], c: "1" };
//assertEqual(eqObjects(cd, dc), true); // => true

//const cd2 = { c: "1", d: ["2", 3, 4] };
//assertEqual(eqObjects(cd, cd2), false); // => false