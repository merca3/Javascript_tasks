const number = 23456;
let num = number;
const numLong = num.toString().length;
let sum = 0;

for (let i = 1; i <= numLong; i++) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log(`The sum of digits of number ${number} is ${sum}`);

// var value = 1234,
//     sum = 0;

// while (value) {
//     sum += value % 10;
//     value = Math.floor(value / 10);
// }

// console.log(sum);