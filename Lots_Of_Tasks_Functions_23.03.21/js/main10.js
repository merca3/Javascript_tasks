// Write a function which returns the n rows by n columns identity matrix.


function showIdentityMatrix(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        let arrayInside = [];
        for (let j = 0; j < n; j++) {
            if (i == j) {
                arrayInside[j] = 1;
            } else {
                arrayInside[j] = 0;
            }
        }
        array.push(arrayInside);
    }
    return array;
}
// can be done with string, not array, to add new line: /n

const nColRows = 5;
console.log(`Identity matrix with ${nColRows} rows and columns:`)
console.log(showIdentityMatrix(nColRows));