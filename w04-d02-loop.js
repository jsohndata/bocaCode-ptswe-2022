const testObject = {
  nameF: 'First Name',
  nameL: 'Last Name',
  nameM: 'Middle Name',
}

const testArray = [100, 200, 300, 400]

const testString = 'Loop This!'

// For Loop
function loopFor() {
  for (i = 0; i <= 100; i++) {
    console.log(i)
  }
}

// For In => Object && Array
function loopForIn(paramVar) {
  for (let x in paramVar) {
    console.log(x)
    console.log(paramVar[x])
  }
}

// For Of => Array (and String)
function loopForOf(paramVar) {
  for (let x of paramVar) {
    console.log(x)
  }
}

// Do While
function loopDoWhile(paramVar) {
  let i = 0

  do {
    i++
    console.log(i)
  } while (i < paramVar)
}

// While Loop
function loopWhile(paramVar) {
  let i = 0

  while (i < paramVar) {
    i++
    console.log(i)
  }
}

//loopForOf(testArray)
loopDoWhile(200)
