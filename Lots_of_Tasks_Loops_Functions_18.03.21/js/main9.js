const num1 = 12;
const num2 = 24;
let gcd = 1;
for (i = 1; i <= num1; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
    }
}
console.log(`GCD of numbers ${num1} and ${num2} is: ${gcd}`);