const takeUntil = function(array, callback) {
  const result = [];
  
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
  
    } else {
      return result;
    }
  }
  return result;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(takeUntil(data1, x => x < 0));

const data3 = [-1, -2, -5, -10];
console.log(takeUntil(data3, x => x < 0));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
console.log(takeUntil(data2, x => x === ','));
