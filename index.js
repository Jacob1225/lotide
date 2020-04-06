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
  head:   head,
  tail:   tail,
  middle: middle,
  letterPosititions: letterPosititions,
  map: map,
  takeUntil: takeUntil,
  without: without,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual
};