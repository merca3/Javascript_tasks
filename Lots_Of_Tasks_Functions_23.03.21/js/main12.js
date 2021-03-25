// Write a function to compute the factors of a positive integer.


function showFactors(number) {
    let factorsString = '';

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            factorsString += `${i} `;
        }
    }
    return factorsString;
}

const num = 24;
console.log(`Factors of number ${num} are: ${showFactors(num)}`);