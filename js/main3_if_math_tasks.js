// Task 1

let number = 7;

if (number % 2 !== 0) {
    console.log('The number is odd');
} else {
    console.log('The number is even');
};

// Task 2

const age = 49;
if (age <= 18) {
    console.log('Age group is 0-18 years');
} else if (age > 18 && age <= 30) {
    console.log('Age group is 19-30 years');
} else if (age > 30 && age <= 40) {
    console.log('Age group is 31-40 years');
} else if (age > 40 && age <= 50) {
    console.log('Age group is 41-50 years');
} else {
    console.log('Age group is 51+ years');
};

// Task 3

let num = 6;
if (num % 2 === 0 && num % 3 === 0) {
    console.log('Fizz Bazz');
} else if (num % 2 === 0) {
    console.log('Fizz');
} else if (num % 3 === 0) {
    console.log('Bazz');
} else {
    console.log('Number is ' + num);
};