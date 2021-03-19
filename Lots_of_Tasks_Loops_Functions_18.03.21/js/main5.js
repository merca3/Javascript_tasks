const num = 13;
let prime = true;

for (i = 2; i < num; i++) {
    if (num % i !== 0) {} else {
        prime = false;
    };
};
if (prime) {
    console.log(`The number ${num} is prime`);
} else {
    console.log(`The number ${num} is not prime`);
};