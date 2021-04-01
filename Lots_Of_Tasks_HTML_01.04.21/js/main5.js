function insert_Row() {
    const newRow = `
    <tr>
            <td>New Row cell1</td>
            <td>New Row cell2</td>
        </tr>
    `;
    let rowElement = document.getElementById('sampleTable');
    rowElement.innerHTML += newRow;
}