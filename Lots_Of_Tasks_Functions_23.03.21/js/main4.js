// 4. Write a function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.


function alphabetOrder(phrase) {
    return phrase
        .split('')
        .sort()
        .join('');
}

const randomString = 'fadhfnaigjwb fnvlas';
console.log(`Phrase "${randomString}" sorted by alphabet is: "${alphabetOrder(randomString)}"`);