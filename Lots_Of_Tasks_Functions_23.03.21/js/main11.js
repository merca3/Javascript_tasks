// Write a function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive 
// integer that is equal to the sum of its proper positive divisors, that is, 
// the sum of its positive divisors excluding the number itself 
// (also known as its aliquot sum).


function isPerfectNum(number) {
    let divisorSum = 0;
    let result = false;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisorSum += i;
        }
    }
    if (divisorSum == number) {
        result = true;
    }
    return result;
}

const num = 29;
console.log(`Is number ${num} perfect? "${isPerfectNum(num)}"`);