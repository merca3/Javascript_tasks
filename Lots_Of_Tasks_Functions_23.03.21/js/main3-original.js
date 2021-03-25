function generateCombinations(string) {
    let result = [];

    for (let i = 0; i < string.length; i++) {
        let character = string.charAt(i);
        let temporaryArray = [character];

        for (let j = 0; j < result.length; j++) {
            temporaryArray.push(result[j] + character);
        }
        result = result.concat(temporaryArray);
        // result = [...result, ...temporaryArray];
    }

    return result;
}

console.log(generateCombinations('dog'));
console.log(generateCombinations('abc'));