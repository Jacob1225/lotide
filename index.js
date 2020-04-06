const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const letterPosititions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = {
  head,
  tail,
  middle,
  letterPosititions,
  map,
  takeUntil,
  without,
  findKey,
  findKeyByValue,
  eqObjects,
  eqArrays,
  countOnly,
  countLetters,
  assertObjectsEqual,
  assertEqual,
  assertArraysEqual
};