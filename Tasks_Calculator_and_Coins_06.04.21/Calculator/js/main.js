let screened = document.getElementById('screen');

function del() {
    screened.innerText = '';
}

function chooseOperator(btnElement) {
    let operatorStr = btnElement.innerText;
    if (operatorStr === 'x') {
        operatorStr = '*';
    }
    screened.innerText += operatorStr;
}

function chooseNum(n) {
    let numStr = n.innerText;
    screened.innerText += numStr;
}

function equation() {
    screened.innerText = eval(screened.innerText);
}