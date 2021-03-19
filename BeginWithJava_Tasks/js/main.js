console.log('Task 1');
// Write a program to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
};



console.log('--------------------');
console.log('Task 2');
// Write a program to calculate the sum of first 10 natural number.
let sum = 0;
for (i = 1; i <= 10; i++) {
    sum += i;
}
console.log('The sum of first 10 natural numbers is ', sum);



console.log('--------------------');
console.log('Task 3');
// Write a program that prompts the user to input a positive integer. Usually taken from HTML file?
// (let's instead make a variable which is a natural number not bigger than 10)
// It should then print the multiplication table of that number. 
const num1 = 7;
for (i = 0; i <= 10; i++) {
    let mult = num1 * i;
    console.log(`${num1} x ${i} = ${mult}`);
};



console.log('--------------------');
console.log('Task 4');
// Write a program to find the factorial value of any number entered through the keyboard. 
let factorial = 1;
for (i = 1; i <= num1; i++) {
    factorial = factorial * i;
};
console.log(`!${num1} = ${factorial}`);



console.log('--------------------');
console.log('Task 5');
// Two numbers are entered through the keyboard. 
// Write a program to find the value of one number raised to the power of another. 
const num2 = 4;
const num3 = 5;
let power = 1;

for (i = 1; i <= num3; i++) {
    power = power * num2;
}
console.log(`${num2} in power of ${num3} = ${power}`);



console.log('--------------------');
console.log('Task 6');
// Write a program that prompts the user to input an integer and then outputs the number with the digits reversed. 
// For example, if the input is 12345, the output should be 54321.
const bigNum = 561248;
console.log(`The number is ${bigNum}`);
console.log(`The number reversed is ${bigNum.toString().split('').reverse().join('')}`);



console.log('--------------------');
console.log('Task 7');
// Write a program that reads a set of integers, and then prints the sum of the even and odd integers.
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(`Numbers are ${numbers}`);
let sumEven = 0;
let sumOdd = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        sumEven = sumEven + numbers[i];
    } else {
        sumOdd = sumOdd + numbers[i];
    }
};
console.log(`The sum of even numbers is ${sumEven}`);
console.log(`The sum of odd numbers is ${sumOdd}`);



console.log('--------------------');
console.log('Task 8');
// Write a program that prompts the user to input a positive integer. 
// It should then output a message indicating whether the number is a prime number. \
const num4 = 47;
const num5 = 48;
let isPrime1 = true;
let isPrime2 = true;

for (i = 2; i < num4; i++) {
    if (num4 % i !== 0) {} else {
        isPrime1 = false;
    }
}
if (isPrime1) {
    console.log(`Number ${num4} is prime`);
} else {
    console.log(`Number ${num4} is not prime`);
}

for (i = 2; i < num5; i++) {
    if (num5 % i !== 0) {} else {
        isPrime2 = false;
    }
}
if (isPrime2) {
    console.log(`Number ${num5} is prime`);
} else {
    console.log(`Number ${num5} is not prime`);
}



console.log('--------------------');
console.log('Task 9');
// Write a program to calculate HCF (highest common factor) of Two given number.
const num6 = 12;
const num7 = 24;
let hcf = 1;
for (i = 1; i <= num6; i++) {
    if (num6 % i === 0 && num7 % i === 0) {
        hcf = i;
    }
}
console.log(`HCF of numbers ${num6} and ${num7} is: ${hcf}`);



console.log('--------------------');
console.log('Task 10');
// Write a program to enter the numbers till the user wants and at the end 
// the program should display the largest and smallest numbers entered.
const numbers2 = [2, 89, 13, 45, 74, 3, 22, 64, 4];
console.log(`Numbers are ${numbers2}`);
console.log(`The biggest number is ${Math.max(...numbers2)}`); // need to ask why '...' are needed
console.log(`The smallest number is ${Math.min(...numbers2)}`);



console.log('--------------------');
console.log('Task 11');
// Write a program to print out all Armstrong numbers between 1 and 500. 
// If sum of cubes of each digit of the number is equal to the number itself, 
// then the number is called an Armstrong number.
// For example, 153 = ( 1 * 1 * 1 ) + ( 5 * 5 * 5 ) + ( 3 * 3 * 3 )
const maxCounter = 1000;

for (let counter = 1; counter <= maxCounter; counter++) {
    let cube = 0;
    let countSplit = counter.toString().split('');

    for (i = 0; i < countSplit.length; i++) {
        cube += Math.pow(parseInt(countSplit[i]), 3);
    }
    if (cube == counter) {
        console.log(`${counter} is an Amrstrong number`);
    }
}

// for (i = 1; i <= 500; i++) {
//     let cube = 0;
//     let numSplit = [];
//     if (i < 10) {
//         cube = Math.pow(i, 3)
//     } else if (i >= 10 && i < 100) {
//         numSplit = i.toString().split('');
//         cube = Math.pow(parseInt(numSplit[0]), 3) + Math.pow(parseInt(numSplit[1]), 3);
//     } else {
//         numSplit = i.toString().split('');
//         cube = Math.pow(parseInt(numSplit[0]), 3) + Math.pow(parseInt(numSplit[1]), 3) +
//             Math.pow(parseInt(numSplit[2]), 3);
//     }
//     if (cube == i) {
//         console.log(`${i} is an Amrstrong number`);
//     }
// }


console.log('--------------------');
console.log('Task 12');
// Write a program to print Fibonacci series of n terms where n is input by user :
// 0 1 1 2 3 5 8 13 24 .....        
// Let's have first 12 numbers

let fibSum = 0;
let fibPrev = 1;
let fibPrevPrev = 0;
let fibonaci = [fibPrevPrev, fibPrev];
for (i = 0; i <= 10; i++) {
    fibSum = fibPrev + fibPrevPrev;
    fibPrevPrev = fibPrev;
    fibPrev = fibSum;
    fibonaci.push(fibSum);
};
console.log(`This is Fibonaci Series: ${fibonaci}...`);


console.log('--------------------');
console.log('Task 13');
// Write a program to calculate the sum of following series where n is input by user. 
// 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/n 
const num8 = 8;
let sumN = 0;
for (i = 1; i <= num8; i++) {
    sumN = sumN + 1 / i;
};
console.log(`Sum of 1 + 1/2 + 1/3 +…………1/n when n = ${num8} is ${sumN}`);