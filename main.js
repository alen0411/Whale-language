const input = 'Hello Whale World';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

// for loop to check over each input character
for (let i = 0; i < input.length; i++) {
  // nested for loop
  for (let j = 0; j < vowels.length; j++) {
    // compare letters from input with vowels in the array
    if (input[i] === vowels[j]) {
      // double the 'e' and 'u' as per whale language
      if (input[i] === 'e' || vowels[j] === 'u'){
        resultArray.push(input[i], input[i]);
      } else {
      resultArray.push(input[i]);
      }
    }
  }
}
// log the result to the console
console.log(resultArray.join(' ').toUpperCase());
