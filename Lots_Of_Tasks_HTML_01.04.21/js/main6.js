// Long and bad version:

// function changeCell() {
//     const newCellTextInput = document.getElementById('new-cell-text');
//     const newCellText = newCellTextInput.value;
//     if (newCellText === '') {
//         alert('Please fill in the new cell text!');
//         return false;
//     }
//     findCell(newCellText);
//     newCellTextInput.value = '';
// }

// function findCell(newText) {
//     const rowNr = document.getElementById('choose-row').value;
//     const colNr = document.getElementById('choose-column').value;

//     if (rowNr == '1') {
//         if (colNr == '11') {
//             let cell = document.getElementById('sampleTable').rows[0].cells;
//             cell[0].innerHTML = `${newText}`;
//         } else if (colNr == '22') {
//             cell = document.getElementById('sampleTable').rows[0].cells;
//             cell[1].innerHTML = `${newText}`;
//         } else {
//             cell = document.getElementById('sampleTable').rows[0].cells;
//             cell[2].innerHTML = `${newText}`;
//         }
//     } else if (rowNr == '2') {
//         if (colNr == '11') {
//             let cell = document.getElementById('sampleTable').rows[1].cells;
//             cell[0].innerHTML = `${newText}`;
//         } else if (colNr == '22') {
//             cell = document.getElementById('sampleTable').rows[1].cells;
//             cell[1].innerHTML = `${newText}`;
//         } else {
//             cell = document.getElementById('sampleTable').rows[1].cells;
//             cell[2].innerHTML = `${newText}`;
//         }
//     } else {
//         if (colNr == '11') {
//             let cell = document.getElementById('sampleTable').rows[2].cells;
//             cell[0].innerHTML = `${newText}`;
//         } else if (colNr == '22') {
//             cell = document.getElementById('sampleTable').rows[2].cells;
//             cell[1].innerHTML = `${newText}`;
//         } else {
//             cell = document.getElementById('sampleTable').rows[2].cells;
//             cell[2].innerHTML = `${newText}`;
//         }
//     }
// }

// Janis's version (good one): 

function changeCell(event) {
    event.preventDefault();
    const rowNumber = document.getElementById('pick-row').value;
    const colNumber = document.getElementById('pick-col').value;
    const rowIndex = parseInt(rowNumber) - 1;
    const colIndex = parseInt(colNumber) - 1;

    const rowElement = document.getElementById('table-body').children[rowIndex];
    const cellElement = rowElement.children[colIndex];

    const newValue = document.getElementById('new-cell-value').value;
    cellElement.innerHTML = newValue;
}