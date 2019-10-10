const initialState = 0;
let arrayDigits = []

let displayCalc = document.querySelector("#display")

let displayExp = document.querySelector("#expression")

displayCalc.innerHTML = initialState

function clearMemory() {
    //console.log('Limpar')
    displayCalc.innerHTML = initialState
    arrayDigits = []
    displayExp.innerHTML = ""   
}

function setOperation(value) {
    //console.log(operation)
    operation = document.getElementById(value).value
    arrayDigits.push(operation)
    displayExp.innerHTML += operation
    displayCalc.innerHTML = "" 
}

function addDigit(value) {
    let digit = document.getElementById(value).value
    arrayDigits.push(digit)
    
    displayExp.innerHTML += digit

    if(displayCalc.innerHTML == initialState)
    {
        displayCalc.innerHTML = digit
    }
    else
        displayCalc.innerHTML += digit
}

function result() {
    let calcExpression = arrayDigits.join("")
    let result = eval(calcExpression)
    displayCalc.innerHTML = result
}