let screened = document.getElementById('screen');
let counting = '';
// let fullNum = '';

function updateScreenedText() {
    screened.innerText += this.innerText;
}

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
            updateScreenedText();
            counting += this.innerText;
        }
    })
});

document.querySelectorAll('.num').forEach(item => {
    item.addEventListener('click', function() {
        // fullNum += this.innerText;
        updateScreenedText();
        counting += this.innerText;
    })
});

document.getElementById('eqn-bg')
    .addEventListener('click', function() {
        const result = eval(counting);
        screened.innerText = result;
        // fullNum = '';
        counting = '';
    })