//The original challenge, was to take a string 'javascriptloops' 
// and return an output that has vowels followed by the consonants of the string, in order as they appear on a new line.

let randomString = 'j;lajksdf;alksj';

function print (str) {
    // the default string to check against
    const string = 'javascriptloops';
    // create a variable to execute from function argument, if undefined use backup 'string'
    let altStr = str || string;
    let vowArr = [], conArr = [];
    let regexTest = /a|e|i|o|u/;

    // one method to iterate through the string
    for (let i in altStr) {
        regexTest.test(altStr[i]) ? vowArr.push(altStr[i]) : conArr.push(altStr[i])
    }

    let combinedArr = vowArr.concat(conArr);
    return combinedArr.forEach(i => console.log(i))
        
    //using this same method, I could have done something like: 
    // for (let i in altStr) {
    //     regexTest.test(altStr[i]) ? console.log(altStr[i]) : conArr.push(altStr[i])
    // }
    // return conArr.forEach(i => console.log(i))
    // this would have helped time and space by reducing two arrays, vowArr and combinedArr, and the join
}

console.log('Original function, solution:');
print();

console.log('Break, new function: ');
print(randomString);