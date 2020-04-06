const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [1, 2, 4, 6] for [1, 1, 2, 4, 6]", () => {
    assert.deepEqual(tail([1, 1, 2, 4, 6]), [1, 2, 4, 6]);
  });

  it("returns an empty array if passed an empty array", () => {
    assert.deepEqual(tail([]), []);
  });

});



