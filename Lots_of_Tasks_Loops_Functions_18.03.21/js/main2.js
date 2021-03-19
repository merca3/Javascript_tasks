let sum = 0;
let numbers = [];

for (let i = 1; i <= 10; i++) {
    sum += i;
    numbers.push(i);
};
console.log(`First 10 natural numbers are ${numbers}`);
console.log(`Sum of first 10 natural numbers is ${sum}`);