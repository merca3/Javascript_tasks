// Write a function that accepts a string as a parameter and converts the first letter of 
// each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '


function firstLetterBig(phrase) {

    let phraseSplit = phrase.split(' ');

    for (let i = 0; i < phraseSplit.length; i++) {
        phraseSplit[i] = phraseSplit[i].charAt(0).toUpperCase() +
            phraseSplit[i].substring(1);
    }
    return phraseSplit.join(' ');
}

const phrase1 = 'the quick brown fox';
console.log(`Was "${phrase1}", now "${firstLetterBig(phrase1)}"`);