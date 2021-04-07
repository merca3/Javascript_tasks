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
let upg1xAmount = parseInt(upg1xEl.innerHTML)
let upg10xAmount = parseInt(upg10xEl.innerHTML)


document.getElementById('click-me')
    .addEventListener('click', function() {
        totalCoinsInt++;
        availCoinsInt++;
        totalCoins.innerHTML = totalCoinsInt;
        availCoins.innerHTML = availCoinsInt;
        if (availCoinsInt >= 10) {
            upg1xBtn.disabled = false;
        }
        if (availCoinsInt >= 90) {
            upg10xBtn.disabled = false;
        }
    });

document.getElementById('up1x')
    .addEventListener('click', function() {
        if (availCoinsInt >= 10) {
            availCoinsInt = availCoinsInt - price1;
            price1 = Math.round(price1 * 1.1);
            upg1xAmount++;
            upg1xEl.innerHTML = upg1xAmount;
            price1El.innerHTML = price1;
            availCoins.innerHTML = availCoinsInt;
            setInterval(function() {
                totalCoinsInt++;
                availCoinsInt++;
                totalCoins.innerHTML = totalCoinsInt;
                availCoins.innerHTML = availCoinsInt;
            }, 1000)
        }
    });

document.getElementById('up10x')
    .addEventListener('click', function() {
        if (availCoinsInt >= 90) {
            availCoinsInt = availCoinsInt - price2;
            price2 = Math.round(price2 * 1.1);
            upg10xAmount++;
            upg10xEl.innerHTML = upg10xAmount;
            price2El.innerHTML = price2;
            availCoins.innerHTML = availCoinsInt;
            setInterval(function() {
                totalCoinsInt += 10;
                availCoinsInt += 10;
                totalCoins.innerHTML = totalCoinsInt;
                availCoins.innerHTML = availCoinsInt;
            }, 1000)
        }
    });