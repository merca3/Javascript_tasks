let screened = document.getElementById('screen');
let counting = '';
// let fullNum = '';

document.getElementById('delete')
    .addEventListener('click', function() {
        screened.innerText = '';
        counting = '';
        // fullNum = '';
    });

document.querySelectorAll('.operator').forEach(item => {
    item.addEventListener('click', function() {
        // fullNum = '';
        if (this.innerText === 'x') {
            screened.innerText += '*';
            counting += '*';
        } else {
            screened.innerText += this.innerText;
            counting += this.innerText;
        }
    })
});

document.querySelectorAll('.num').forEach(item => {
    item.addEventListener('click', function() {
        // fullNum += this.innerText;
        screened.innerText += this.innerText;
        counting += this.innerText;
    })
});

document.getElementById('eqn-bg')
    .addEventListener('click', function() {
        const result = eval(counting);
        screened.innerText = result;
        // fullNum = '';
        counting = result;
    })