// Write a function that accepts a string as a parameter and counts the number 
// of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, 
// we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5


function countVowels(phrase) {
    let vowels = /[aeiou]/gi;
    let result = phrase.match(vowels);
    let count = result.length;
    return count;
}

const phrase = 'The quick brown fox';
console.log(`In phrase "${phrase}" are ${countVowels(phrase)} vowels`);


// function getCount(str) {
//     let vowelList = 'AEIOUaeiou'
//     let vowelsCount = 0;

//      for(var i = 0; i < str.length ; i++)
//       {
//         if (vowelList.indexOf(str[i]) !== -1)
//         {
//           vowelsCount += 1;
//         }
//       }
//       return vowelsCount;
//     }