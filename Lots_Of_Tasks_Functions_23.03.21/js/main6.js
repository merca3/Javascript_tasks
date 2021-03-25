// Write a function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'


function longestWord(phrase) {
    let sortedArray = phrase
        .split(' ')
        .sort((a, b) => a.length - b.length);

    let longWord = sortedArray[sortedArray.length - 1];
    return longWord;
}

const phrase1 = 'Web Development Tutorial';
console.log(`Phrase is: ${phrase1}`);
console.log(`The longest word is: ${longestWord(phrase1)}`);