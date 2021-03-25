// Write a function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., 
// madam or nurses run.

function palindrome(phrase) {

    let phraseReversed = phrase
        .toLowerCase()
        .replace(/ /g, '')
        .split('')
        .reverse()
        .join('');

    if (phrase.replace(/ /g, '') === phraseReversed) {
        return `Phrase "${phrase}" is a polindrome`;
    } else {
        return `Phrase "${phrase}" is NOT a polindrome`;
    }
}

const phrase1 = 'nurses run';
console.log(palindrome(phrase1));