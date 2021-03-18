let primeNumbers = [];
let sumPrime = 0;
for (let counter = 2; counter <= 100; counter++) {
    let notPrime = false;
    for (let i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        sumPrime++;
        primeNumbers.push(counter);
        // console.log(counter);
    }
}
console.log(`Prime numbers till 100 are: ${primeNumbers}`);
console.log(`Amount of prime numbers till 100 is ${sumPrime}`);