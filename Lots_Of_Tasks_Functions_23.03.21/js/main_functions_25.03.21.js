console.log('Task 15');

function baseExponent(b, n) {
    let result = b;
    for (let i = 1; i < n; i++) {
        result *= b;
    }
    return result;
}

const base = 2;
const exponent = 4;

console.log(`Number ${base} in power of ${exponent} = ${baseExponent(base, exponent)}`);



console.log('--------------------'); // need to work on this still
console.log('Task 16');

function extractUniqueChar(phrase) {
    let output = '';
    const phraseArray = phrase.split('');
    for (i = 0; i < phraseArray.length; i++) {

        let randomElement = phraseArray[i];

        for (let j = 0; j < phraseArray.length; j++) {

            if (randomElement !== phraseArray[j]) {

                output += `${randomElement}`;
            }
        }
    }
    return output;
}

const randomString = 'thequickbrownfoxjumpsoverthelazydof';
console.log(extractUniqueChar(randomString));



console.log('--------------------'); // need to work on this still
console.log('Task 17');

function occurrencesCount(phrase) {
    let array = phrase.split('');
    let output = '';
    for (i = 0; i < array.length; i++) {
        let letter = array[i];
        let count = 0;
        for (j of array) {
            if (letter === array[j]) {
                count++;
                output += `${letter}: ${count}`;
            }
        }

    }
    return output;
}

const randomString1 = 'aaaabbbccdeefff'
console.log(occurrencesCount(randomString1));



console.log('--------------------'); 
console.log('Task 18');

function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

const array18 = [2, 6, 4, 16, 90, 3, 19, 45];
const sortedArray18 = array18.sort((a, b) => a - b);
console.log(binarySearch(sortedArray18, 4));



console.log('--------------------'); 
console.log('Task 19');

function largerThanANumber(array, number) {
    let output = [];
    for (i = 0; i < array.length; i++) {
        if (number < array[i]) {
            output.push(array[i]);
        }
    }
    return output;
}

const array19 = [2, 67, 34, 15, 92, 35, 61, 29];
const number19 = 50;
console.log(`Array is: ${array19}`);
console.log(`Numbers of array which are bigger than ${number19} are: ${largerThanANumber(array19, number19)}`);



console.log('--------------------'); 
console.log('Task 20');

function generateString(length) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const number20 = 13;
console.log(generateString(number20));



console.log('--------------------'); 
console.log('Task 21');

// need explanation about the task itself



console.log('--------------------'); 
console.log('Task 22');

function howManyLetters(string, letter) {
    let amount = 0;
    let array = string.split('');
    for (i = 0; i < array.length; i++) {
        if (letter === array[i]) {
            amount++;
        }
    }
    return amount;
}

const string22 = 'w3resooource.com';
const letter22 = 'o';
console.log(howManyLetters(string22, letter22));



console.log('--------------------'); // probably need more explanation on this task...
console.log('Task 23');

function findNotRepeatedchar(phrase) {

    for (i = 0; i < phrase.length; i++) {
        output = phrase.charAt(i);
        if (phrase.indexOf(output) == i && phrase.indexOf(output, i + 1) == -1) {
            return output;
          }
    }
    return 'None';
}

const phrase23 = 'abacddbec';
console.log(`Phrase is "${phrase23}"`);
console.log(`First not repeated character is: ${findNotRepeatedchar(phrase23)}`);



console.log('--------------------'); 
console.log('Task 24')

function bubbleSort(array) {
    return array.sort((a, b) => b - a);
}
const array24 = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log(bubbleSort(array24));



console.log('--------------------'); 
console.log('Task 25')

function longestCountryname(array) {
    let result = array[0];
    for (i = 0; i < array.length; i++) {
        if (result.length < array[i].length) {
            result = array[i];
        }
    }
    return result;
}

const countries = ['Latvia', 'Australia', 'United States of America', 'Japan'];
console.log(longestCountryname(countries));



console.log('--------------------'); 
console.log('Task 26')
// Write a function to find longest substring in a given string
// without repeating characters





console.log('--------------------'); 
console.log('Task 27')


console.log('--------------------'); 
console.log('Task 28')
// Write a Javascript program to pass a 'Javascript function' as a parameter;



console.log('--------------------'); // need more explanation
console.log('Task 29')

function findFunctionName(fun) {
    var ret = fun.toString();
    ret = ret.substr('function '.length);
    ret = ret.substr(0, ret.indexOf('('));
    return ret;
    // console.log(arguments.callee.name);
}

console.log(findFunctionName(longestCountryname));