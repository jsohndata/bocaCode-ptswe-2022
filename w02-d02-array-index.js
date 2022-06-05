// OBJ

"use strict"

const object = {
  name1: 1000,
  name2: 2000,
  name3: 3000,
}

let renderResult = object['name1']

console.log(renderResult)

// Setup: Array
const arrayMain1 = [
  'test1', // [0]
  'test2', // [1]
  'test3', // [2]
  'Elizabeth', // [3]
  [
    // [4]
    'childarray1', // [4][0]
    'childarray2', // [4][1]
    'childarray3', // [4][2]
    {
      // [4][3]
      gcname1: 'grandchild1', // [4][3][0]
      gcname2: 'grandchild2', // [4][3][1]
      gcname3: 'grandchild3', // [4][3][2]
    },
  ],
]

console.log(arrayMain1[4][3])
