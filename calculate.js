let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let additionButton = document.querySelector('#addButton');
let subtractionButton = document.querySelector('#subtractButton');
let multiplicationButton = document.querySelector('#multiplyButton');
let divisionButton = document.querySelector('#divideButton');
let outputField = document.querySelector('#output');


function add() {
    let val1 = Number(input1.value);
    let val2 = Number(input2.value);
    let total = val1 + val2;
    outputField.value = "$" + total;
}
additionButton.onclick = function () {
    add();
}

function subtract() {
    let val1 = Number(input1.value);
    let val2 = Number(input2.value);
    let total = val1-val2;
    outputField.value = "$" + total;
}
subtractionButton.onclick = function() {
    subtract();
}

function multiply() {
    let val1 = Number(input1.value);
    let val2 = Number(input2.value);
    let total = val1 * val2;
    outputField.value = "$" + total;
}
multiplicationButton.onclick = function() {
    multiply();
}

function divide() {
    let val1 = Number(input1.value);
    let val2 = Number(input2.value);
    let total = val1/val2;
    outputField.value = "$" + total;
}
divisionButton.onclick = function() {
    divide();
}