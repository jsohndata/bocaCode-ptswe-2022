// Anatomy of a fuction
function helloThere (parameter) {
    console.log(parameter)
}

helloThere('argument')



// Default Parameter
function greeting(name = 'stranger') {
    console.log(`hello ${name}`)
}

greeting('Nick')
greeting()



// Helper Functions
function multiplyByNineFifths(number) {
    return number * (9/5);
  };
   
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
   
  getFahrenheit(15); // Returns 59



  //Function Expressions
  const whatSize = function(width, height) {
      return width * height
  }

  console.log( whatSize(4,5) )

  // Arrow Expression
  /* Term: => Fat Arrow */
  const plantNeedsWater1 = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};


const plantNeedsWater2 = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }  
}

//Consise Body Arrow Functions
const functionName = () => {}
const functionName2 = paramOne => {}
const functionName3 = (paramOne, paramTwo) => {}

// single-line block implicit return
const sumNumberLong = number => {
    const sum = number + number
    return sum
}

const sumNumbersShort = number => number + number




