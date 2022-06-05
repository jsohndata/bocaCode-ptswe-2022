"use strict"

const testObject = {
  nameF: 'First Name',
  nameL: 'Last Name',
  nameM: 'Middle Name',
}

const testArray = [100, 200, 300, 400]

const testString = 'Loop This!'

// For Loop
function forLoop() {
  for (i = 0; i <= 100; i++) {
    console.log(i)
  }
}

// For In => Object && Array
function forInLoop(paramVar) {
  for (let x in paramVar) {
    console.log(x)
    console.log(paramVar[x])
  }
}

// For Of => Array (and String)
function forOfLoop(paramVar) {
  for (let x of paramVar) {
    console.log(x)
  }
}

// Do While => Int
function doWhileLoop(paramVar) {
  let i = 0

  do {
    i++
    console.log(i)
  } while (i < paramVar)
}

// While Loop => Int
function whileLoop(paramVar) {
  let i = 0

  while (i < paramVar) {
    i++
    console.log(i)
  }
}

//loopForOf(testArray)
doWhileLoop(200)
