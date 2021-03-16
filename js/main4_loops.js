for (let i = 0; i < 100; i++) { // works also without let, but why?
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

// for (let i = 0; i <= 100; i++) { // also works
//     let output = '';
//     if (i % 2 == 0) {
//         output += 'Fizz ';
//     }
//     if (i % 3 == 0) {
//         output += 'Bazz ';
//     }
//     if (!output) {
//         output = i;
//     }

//     console.log(output);
// }

for (i = 1000; i >= 50; i -= 7) {
    if (i % 2 === 0) {
        console.log('The number is even - ', i);
    } else {
        console.log('The number is odd - ', i);
    };
};