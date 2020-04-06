# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install jacob1225/lotide`

**Require it:**

`const _ = require('jacob1225/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: confirms that our returned value matches with the expected value 
* `assertArraysEqual`: confirms that two arrays are equal to each other
* `assertObjectsEqual`: confirms that two objects are equal to each other
* `eqArrays`: confirms that two arrays are equal
* `eqObjects`: confirms that two objects have identical keys with identical values
* `countLetters`: counts the occurence of each letter in a string
* `countOnly`: looks through an array of strings to count only specified values and returns an object with each key and their count
* `findKey`: returns the first key that matches a condition specified by a function
* `findKeyByValie`: returns the key the matches a specified value 
* `head`: returns the first value in an array
* `letterPositions`: returns an object with the letters of a string as keys and their index as the value
* `map`: returns a new array with the results of calling a callback function
* `middle`: returns the middle element of an array if the length is odd, returns an empty array with the length is <=1 and returns the middle elements of an array if length is even
* `tail`: Takes the first element out of an array and returns that array
* `takeUntil`: takes an array with a callback function and returns the values in a new array until a truthy value is met
* `without`: takes an array and removes a spcecified value from it and returns a new array without aletering the original array