function numberReversed(number) {
    return number.toString().split('').reverse().join('');
}
const number = 32243;

console.log(`Number ${number} reversed is ${numberReversed(number)}`);