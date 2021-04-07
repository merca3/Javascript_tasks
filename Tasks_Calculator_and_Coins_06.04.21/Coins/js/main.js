let totalCoinsInt = parseInt(document
    .getElementById('total-coins').innerHTML);
let availCoinsInt = parseInt(document
    .getElementById('available-coins').innerHTML);
let price1 = 10; // for this and next variables can use 
let price2 = 90; // also DOM and parseInt
let upg1xAmount = 0;
let upg10xAmount = 0;
let counter;


document.getElementById('click-me')
    .addEventListener('click', function() {
        totalCoinsInt++;
        availCoinsInt++;
        document.getElementById('total-coins').innerHTML = totalCoinsInt;
        document.getElementById('available-coins').innerHTML = availCoinsInt;
        if (availCoinsInt >= 10) {
            document.getElementById('up1x').disabled = false;
        }
        if (availCoinsInt >= 90) {
            document.getElementById('up10x').disabled = false;
        }
    });

document.getElementById('up1x')
    .addEventListener('click', function() {
        if (availCoinsInt >= 10) {
            availCoinsInt = availCoinsInt - price1;
            price1 = Math.round(price1 * 1.1);
            upg1xAmount++;
            document.getElementById('upgrade1x').innerHTML = upg1xAmount;
            document.getElementById('price1').innerHTML = price1;
            document.getElementById('available-coins').innerHTML = availCoinsInt;
            setInterval(function() {
                totalCoinsInt++;
                availCoinsInt++;
                document.getElementById('total-coins').innerHTML = totalCoinsInt;
                document.getElementById('available-coins').innerHTML = availCoinsInt;
            }, 1000)
        }
    });

document.getElementById('up10x')
    .addEventListener('click', function() {
        if (availCoinsInt >= 90) {
            availCoinsInt = availCoinsInt - price2;
            price2 = Math.round(price2 * 1.1);
            upg10xAmount++;
            document.getElementById('upgrade10x').innerHTML = upg10xAmount;
            document.getElementById('price2').innerHTML = price2;
            document.getElementById('available-coins').innerHTML = availCoinsInt;
            setInterval(function() {
                totalCoinsInt += 10;
                availCoinsInt += 10;
                document.getElementById('total-coins').innerHTML = totalCoinsInt;
                document.getElementById('available-coins').innerHTML = availCoinsInt;
            }, 1000)
        }
    });