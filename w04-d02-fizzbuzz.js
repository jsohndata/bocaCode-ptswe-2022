function fizzBuzz() {
  for (n=1; n<=30; n++) {

    let renderResult = n

    if (n%3 === 0 && n%5 === 0) 
      renderResult = `FizzBuzz`
    else if (n%3 === 0 ) 
      renderResult = `Fizz`
    else if (n%5 === 0 ) 
      renderResult = `Buzz`
    
    console.log(renderResult)
  }
}

fizzBuzz()
