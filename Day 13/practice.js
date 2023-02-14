// JS Built-in Properties and Methods

// .length - Length of a String

const greetings = "Hello, Good Evening!";
console.log(greetings.length); // 20

// .toUpperCase() - Convert All character to UPPERCASE

console.log(greetings.toUpperCase()); // HELLO, GOOD EVENING!

// .toLowerCase() - Convert All character to lowercase

console.log(greetings.toLowerCase()); // hello, good evening!

// .indexOf() - Finding the index value of a string

console.log(greetings.indexOf("e")); // 1       - Searching from the start.
console.log(greetings.lastIndexOf("e")); // 14  - Searching from the end.

// .trim() - For removing extra blank spaces from the String.

console.log(greetings.trim());
console.log(greetings.trimStart());
console.log(greetings.trimEnd());

// .includes() - To check if any character sequence is present in the string or not! - Return True or False

console.log(greetings.includes(" Good")); // True

// .startsWith() || .endsWith() To check what is the starting or ending with!

console.log(greetings.startsWith("Hello, ")); // True
console.log(greetings.endsWith("ing!")); // True

// .slice() - To copy String or specific part of a String
// For only 1 parameter, slice will count the parameter as starting index and copy the rest the string.

const newMsg = greetings.slice(7, 11); // 1st value = starting index, 2nd value = ending index + 1
console.log(newMsg); // Good

// .substring() - same as slice() but with a little difference
// if any value is Negetive, substring calculates it as 0.
// if 1st value is larger than 2nd value, substring flips the both value.

console.log(greetings.substring(5, 0)); // Hello

// .split() - To split the string
// specify the seperator inside te split method
// Split will always return an Array.

console.log(greetings.split(",")); // ['Hello', ' Good Evening!']

// .concat() To add string with and existing string.

console.log(greetings.concat(" Faisal.")); // Hello, Good Evening! Faisal.

// .charAt() It takes the index number as argument and return the Character

console.log(greetings.charAt(0)); // H

// .charCodeAt() It takes the index number as argument and return the ASCII value of the Character

console.log(greetings.charCodeAt(0)); // 72 (ASCII value of H)

// .replace() It will replace the 1st value with the 2nd value

console.log(greetings.replace("Hello", "Morning")); // Hello, Good Morning!
