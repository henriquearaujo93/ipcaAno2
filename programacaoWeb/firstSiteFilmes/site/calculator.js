const initialState = 0;
let operation = "";
let digit = [""];
let calc = "";


document.getElementById("display").innerHTML = initialState

function clearMemory() {
    //console.log('Limpar')
    document.getElementById("display").innerHTML = initialState   
}

function setOperation(value) {
    //console.log(operation)
    operation = document.getElementById(value).value
    console.log(operation)
}

function addDigit(value) {
    //console.log(n)
    digit = document.getElementById(value).value
    document.getElementById("display").innerHTML = ""
    document.getElementById("display").innerHTML += value
}