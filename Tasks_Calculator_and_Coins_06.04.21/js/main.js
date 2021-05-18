let activeNumber = '';
let activeOperator = '';
let storedNumber = '';
let screened = document.getElementById('screen');


function digitIsPressed(digit) {
    activeNumber += digit;
    screened.innerHTML += digit;
    doMath();
}

function operatorIsPressed(operator) {
    activeOperator = operator;
    screened.innerHTML += activeOperator;
    if (storedNumber !== '') {
        doMath();
    } else {
        storedNumber = activeNumber;
        activeNumber = '';
    }
}

function equalsIsPressed() {
    doMath();
    screened.innerHTML = storedNumber;
}

function clearScreen() {
    activeNumber = '';
    activeOperator = '';
    storedNumber = '';
    screened.innerHTML = '';
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
            case '*':
                resultNum = parseFloat(storedNumber) * parseFloat(activeNumber);
                break;
            case '/':
                resultNum = parseFloat(storedNumber) / parseFloat(activeNumber);
                break;
        }
        console.log(resultNum)
        storedNumber = resultNum;
        activeNumber = '';
    }
}