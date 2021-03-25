// Write a function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has 
// no positive divisors other than 1 and itself.


function isPrimeNumber(number) {
    let hadDivisor = false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            hadDivisor = true;
            break;
        }
    }
    return !hadDivisor;
}

const number = 47;
console.log(`Is number ${number} prime? ${isPrimeNumber(number)}`);