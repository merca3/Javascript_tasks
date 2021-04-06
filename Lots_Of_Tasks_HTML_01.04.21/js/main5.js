function insertRow() {
    const tableElement = document.getElementById('sampleTable');
    const tBodyElement = tableElement.children[0];
    const rowCount = tBodyElement.children.length;
    const nexRowNumber = rowCount + 1;
    const newRow = `
    <tr>
            <td>Row${nexRowNumber} cell1</td>
            <td>Row${nexRowNumber} cell2</td>
        </tr>
    `;
    tBodyElement.innerHTML += newRow;
}