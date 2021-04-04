function changeCell() {
    const newCellTextInput = document.getElementById('new-cell-text');
    const newCellText = newCellTextInput.value;
    if (newCellText === '') {
        alert('Please fill in the new cell text!');
        return false;
    }
    findCell(newCellText);
    newCellTextInput.value = '';
}

function findCell(newText) {
    const rowNr = document.getElementById('choose-row').value;
    const colNr = document.getElementById('choose-column').value;

    if (rowNr == '1') {
        if (colNr == '11') {
            let cell = document.getElementById('sampleTable').rows[0].cells;
            cell[0].innerHTML = `${newText}`;
        } else {
            cell = document.getElementById('sampleTable').rows[0].cells;
            cell[1].innerHTML = `${newText}`;
        }
    } else {
        if (colNr == '11') {
            let cell = document.getElementById('sampleTable').rows[1].cells;
            cell[0].innerHTML = `${newText}`;
        } else {
            cell = document.getElementById('sampleTable').rows[1].cells;
            cell[1].innerHTML = `${newText}`;
        }
    }
}