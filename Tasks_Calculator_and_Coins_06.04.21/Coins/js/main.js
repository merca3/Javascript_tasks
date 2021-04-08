const totalCoins = document.getElementById('total-coins');
const availCoins = document.getElementById('available-coins');
const price1El = document.getElementById('price1');
const price2El = document.getElementById('price2');
const upg1xEl = document.getElementById('upgrade1x');
const upg10xEl = document.getElementById('upgrade10x');
const upg1xBtn = document.getElementById('up1x');
const upg10xBtn = document.getElementById('up10x');

let totalCoinsInt = parseInt(totalCoins.innerHTML);
let availCoinsInt = parseInt(availCoins.innerHTML);
let price1 = parseInt(price1El.innerHTML);
let price2 = parseInt(price2El.innerHTML);
let upg1xAmount = parseInt(upg1xEl.innerHTML);
let upg10xAmount = parseInt(upg10xEl.innerHTML);

function disableBtns() {
    if (availCoinsInt < price1) {
        upg1xBtn.disabled = true;
    } else {
        upg1xBtn.disabled = false;
    };
    if (availCoinsInt < price2) {
        upg10xBtn.disabled = true;
    } else {
        upg10xBtn.disabled = false;
    };
}

function changeCoinsInnerHTML() {
    totalCoins.innerHTML = totalCoinsInt;
    availCoins.innerHTML = availCoinsInt;
}

setInterval(function() {
    totalCoinsInt += upg1xAmount + upg10xAmount * 10;
    availCoinsInt += upg1xAmount + upg10xAmount * 10;
    changeCoinsInnerHTML()
    disableBtns();
}, 1000);


document.getElementById('click-me')
    .addEventListener('click', function() {
        totalCoinsInt++;
        availCoinsInt++;
        changeCoinsInnerHTML();
        disableBtns();
    });

document.getElementById('up1x')
    .addEventListener('click', function() {
        if (availCoinsInt >= price1) {
            availCoinsInt = availCoinsInt - price1;
            price1 = Math.round(price1 * 1.1);
            upg1xAmount++;
            upg1xEl.innerHTML = upg1xAmount;
            price1El.innerHTML = price1;
            availCoins.innerHTML = availCoinsInt;
            disableBtns();
        };
    });

document.getElementById('up10x')
    .addEventListener('click', function() {
        if (availCoinsInt >= price2) {
            availCoinsInt = availCoinsInt - price2;
            price2 = Math.round(price2 * 1.1);
            upg10xAmount++;
            upg10xEl.innerHTML = upg10xAmount;
            price2El.innerHTML = price2;
            availCoins.innerHTML = availCoinsInt;
            disableBtns();
        }
    });