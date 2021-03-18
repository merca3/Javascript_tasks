let primeLast = 0;
for (let counter = 2; counter <= 50; counter++) {
    let notPrime = false;
    for (let i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        primeLast = counter;
        console.log(counter);
    }
}
console.log(`Last prime number till 50 is ${primeLast}`);