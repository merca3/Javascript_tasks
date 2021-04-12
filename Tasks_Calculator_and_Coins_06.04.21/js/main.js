let activeNumber = '';
let activeOperator = '';
let storedNumber = '';


function digitIsPressed(digit) {
    activeNumber += digit;
    updateScreen();
}

function operatorIsPressed(operator) {
    // updateScreen();
    activeOperator = operator;
    doMath();
    updateScreen();
    storedNumber = activeNumber;
    activeNumber = '';
    activeOperator = '';
}

function equalsIsPressed() {

    doMath();
    updateScreen();

}

function clearScreen() {
    activeNumber = '';
    activeOperator = '';
    storedNumber = '';
    updateScreen();
}

function updateScreen() {
    document.getElementById('screen').innerHTML = activeNumber + activeOperator;
    // console.log(activeNumber + activeOperator);
}

function doMath() {
    if (activeNumber && storedNumber && activeOperator) {
        let resultNum = 0;
        switch (activeOperator) {
            case '+':
                resultNum = parseFloat(storedNumber) + parseFloat(activeNumber);
                break;
            case '-':
                resultNum = parseFloat(storedNumber) - parseFloat(activeNumber);
                break;
            case 'x':
                resultNum = parseFloat(storedNumber) * parseFloat(activeNumber);
                break;
            case '/':
                resultNum = parseFloat(storedNumber) / parseFloat(activeNumber);
                break;
        }
        activeNumber = resultNum;
    }
}

let num1 = '1';
let num2 = '21';
num1 = parseFloat(num1) + parseFloat(num2);
console.log(num1);