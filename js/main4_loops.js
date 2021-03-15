for (i = 0; i < 100; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log('Fizz Bazz ', i);
    } else if (i % 2 === 0) {
        console.log('Fizz ', i);
    } else if (i % 3 === 0) {
        console.log('Bazz ', i);
    } else {
        console.log('Number is ' + i);
    };
};

for (i = 1000; i >= 50; i -= 7) {
    if (i % 2 === 0) {
        console.log('The number is even - ', i);
    } else {
        console.log('The number is odd - ', i);
    };
};