// 4. Write a program to find the perfect numbers between 1 and 500. 
// The perfect numbers between 1 to 500 are:
// 6
// 28
// 496

let perfPart = 0;
for (let counter = 1; counter <= 500; counter++) {
    for (let i = 2; i <= counter; i++) {
        if (counter % i === 0 && counter !== i) {
            perfPart = perfPart + i;
        }
    }
    if (perfPart = counter) {
        console.log(counter);
    }
}