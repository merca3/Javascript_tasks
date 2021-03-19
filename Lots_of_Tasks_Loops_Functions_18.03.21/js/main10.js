const number = 23456;
let num = number;
const numLong = num.toString().length;
let sum = 0;

for (let i = 1; i <= numLong; i++) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log(`The sum of digits of number ${number} is ${sum}`);


// Version 2, also works

let numSplit = number.toString().split('');
console.log(numSplit);
sum = 0;
for (i = 0; i < numLong; i++) {
    // console.log(numSplit[i]);
    sum += parseInt(numSplit[i]);
};
console.log(`The sum of digits of number ${number} is ${sum}`);