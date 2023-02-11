// ----- Exercise-1: Answer the following questions about this code block: (2)

const isLearning = true;
if(isLearning){
    console.log("Keep Learning");
} else {
    console.log("I hope you are learning....");
}

// What should the above code console.log?

// Ans: Keep Learning






// ----- Exercise-2: Why do we not need to specify if(isLearning === true)? 
// Why does if(isLearning) work on its own? (2)

/*
- We can specify the total condition
- But JS, by default will assume the value Truthy or Falsy.
- So if we write only the variable, JS will check if the value is Truthy or Falsy
- If the value is Truthy the condition will be executed.
*/






// ----- Exercise-3:
// Use both if and switch statement (6)
// ====================================================

/*
age: less then 10  
output: stay home under your mom supervision

age: more and equal then 10 and less then 15 
 output: Try to gain knowledge from outside of home

age: more then and equal to 15 and less than 18
output: prepare to cast vote

age: more or equal then 18 
 output: cast you vote

age: unknown
  output: You are out of range
*/


const age = 10;


// Using IF:


if (age < 10) {
    console.log("stay home under your mom supervision");
} else if (age >= 10 && age < 15) {
    console.log("Try to gain knowledge from outside of home");
} else if (age >=15 && age < 18) {
    console.log("prepare to cast vote");
} else if (age > 18) {
    console.log("cast your vote");
} else {
    console.log("You are out of range");
}

// Using SWITCH 

switch (true) {
    case age > 10:
        console.log("stay home under your mom supervision");
        break;
    case age >= 10 && age < 15:
        console.log("Try to gain knowledge from outside of home");
        break;
    case age >=15 && age < 18:
        console.log("prepare to cast vote");
        break;
    case age > 18:
        console.log("cast your vote");
        break;
    default:
        console.log("You are out of range");
}






// ----- Exercise-4:

let var1;
const var2 = "";
const var3 = 1;
const secretMessage = "secret!";

if(var1){
    console.log("first");
} else if(var1 || var2){
    console.log("second");
} else if(var1 || var3){
    console.log("third");
} else {
    console.log("fourth");
}

// What should the above code console.log? Why? (2)

/*
- Output is "third".
- Because uninitialized value of var1 is false
- var2 is a falsy value.
- var3 is a truthy value and it is the result.
*/

// What is the value of var1 when it is initialized? (1)
// - The value of var1 is "undefined".

// Is the value of var1 a "truthy" value? Why? (1)
// - The value of var1 is "undefined" and it a "Falsy" value.

// Is the value of var2 a "truthy" value? Why? (1)
// - No. The value of var2 is an "Empty String". This is a "Falsy" value.

// Is the value of var3 a "truthy" value? Why?(1)
// - Yes, the value of var3 is a "Truthy" value. Because it has a vlue of 1.






// ----- Exercise-5:
// Choose the correct conditional (ternary) operator to console
// "Too young" if age is less than 18, otherwise alert "Old enough" (2)


const myAge = 30;
const status = myAge < 18 ? alert("Old Enough") : "Too Young" ;

console.log(status);






// ----- Exercise-6: When to Use if else vs ternary vs switch? (2)

- When there are only 2 condition needs to check "Ternary" operator looks good. 

- When multiple conditions needs to check, its easy to use "IF Else" operator.

- When there are many conditions, "SWITCH" operator will be a good choise.
