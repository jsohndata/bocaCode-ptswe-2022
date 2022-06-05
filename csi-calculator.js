const prompt = require("prompt-sync")()

const mathOperator = [
    "Addition",
    "Subtraction",
    "Multiplication",    
    "Division",
    "Modular",
]

/* Originally it was ...
'0': function (x,y) { return x + y }

But I wanted to display the equation of the math without creating another array. Thus returning this as an array instead
*/
const mathOperatorFunction = {
    '0': function (x,y) { return [x + y, `+`]},
    '1': function (x,y) { return [x - y, `-`]},
    '2': function (x,y) { return [x * y, `*`]},
    '3': function (x,y) { return [x / y, `/`]},
    '4': function (x,y) { return [x % y, `%`]},
}


console.log(mathOperator[0])

function renderConsoleLog(paramText) {
    console.log(paramText)
}

function renderConsoleClear() {
    console.clear()
}


// 0.0) Initiate
// ***********************************************************
let renderResult
renderConsoleClear()


// 1.0) Ask Name
// ***********************************************************
renderResult = `Hello Operator 🧖 What is thy name?\n---------------------------------`
renderConsoleLog(renderResult)
const userName = prompt('Your name: ')
renderConsoleClear()


// 2.0) Greet Operator and Ask to Play
// ***********************************************************
renderResult = `Hello Operator ${userName} 🧖, Nice to meet you. I am LAH 9000 🔴.
Would you like to play a game today?\n---------------------------------`
renderConsoleLog(renderResult)
const continueGame = prompt(`Choose 👉 Yes, No: `)


// 3.0) Yes To Play
// ***********************************************************
if (continueGame === "Yes") {
    renderConsoleClear()
    
    renderResult = `Today's game is LCI Caluclator 🧮.\n\nPlease choose one of the following.\n`

    const mathOperatorTotal = mathOperator.length

    for (let i=0; i< mathOperatorTotal; i++) {
        const mathOperatorEach = mathOperator[i]

        /* Adding plus 1 to i for human ease of use */
        renderResult += `${i+1}: ${mathOperatorEach}`

        /* Add space after each item. Last item add HR (horizontal line) */
        i!==mathOperatorTotal ? renderResult += `\n` : renderResult += `\n---------------------------------`
    }

    renderConsoleLog(renderResult)

    const mathOperatorPrompt = prompt(`Choose 👉 1 - ${mathOperatorTotal}: `)
    renderConsoleClear()


    // 3.1) Choose Matth Operator and Number
    // ***********************************************************
    /* -1 because array starts with 0. For human we have added 1 to each index so start is 1 not 0 */
    renderResult = `You have choosen ${mathOperatorPrompt} for ${mathOperator[mathOperatorPrompt - 1]}.\n---------------------------------`
    renderConsoleLog(renderResult)


    // 3.1.1) Choose first numnber
    // ***********************************************************
    const mathNum1st  = prompt(`Enter your first number (or type random): `)    
    const mathNumX = mathNum1st == 'random' ? Math.floor(Math.random() * 100) : Number(mathNum1st)
    renderResult = `1st Number: ${mathNumX}\n`
    renderConsoleLog(renderResult)


    // 3.1.2) Choose second numnber
    // ***********************************************************
    const mathNum2nd = prompt(`Enter your second number (or type random): `)
    const mathNumY = mathNum2nd == 'random' ? Math.floor(Math.random() * 100) : Number(mathNum2nd)
    renderResult = `2nd Number: ${mathNumY}\n`
    renderConsoleLog(renderResult)


    // 3.1.3) Computate and render result
    // ***********************************************************
    /* Using object to reference instead of switch or if, else if for leaner code and scalability */ 
    const mathOperationResult       = mathOperatorFunction[Number(mathOperatorPrompt - 1)](mathNumX,mathNumY)
    const mathOperationResultInt    = mathOperationResult[0]
    const mathOperationResultString = mathOperationResult[1]

    /* For visual aid */
    // const mathOperatorFunction = {
    //     '0': function (x,y) { return [x + y, `+`]},
    //     '1': function (x,y) { return [x - y, `-`]},
    //     '2': function (x,y) { return [x * y, `*`]},
    //     '3': function (x,y) { return [x / y, `/`]},
    //     '4': function (x,y) { return [x % y, `%`]},
    // } 

    renderResult = `Equation: ${mathNumX} ${mathOperationResultString} ${mathNumY}\nResult: ${Number(mathOperationResultInt)}`

    renderConsoleLog(renderResult)


} else if (continueGame === "No") {
    renderReusult = `I'm sorry Dave, I'm afraid I can't do that.`
    renderConsoleClear()
    renderConsoleLog(renderReusult)
} 

