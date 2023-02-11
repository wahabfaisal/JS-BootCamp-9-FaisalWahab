** Conditionals

// - Conditional Statements are used to perform different actions based on different conditions.

1. 
if (condition) {
    // if condition is 'true' then this code will be executed.
}


2.
if (condition) {
    // if condition is 'true' then this code will be executed.
} else {
    // if condition is 'false' then this code will be executed
}


3.
if (condition-1) {
    // if condition-1 is 'true' then this code will be executed.
} 

else if (condition-2) {
    // if condition-2 is 'true' then this code will be executed
} 

else if (condition-3) {
    // if condition-3 is 'true' then this code will be executed
} 

else if (condition-4) {
    // if condition-4 is 'true' then this code will be executed
} 

else {
    // if all conditions are 'false' then this code will be executed
}


// ----- Example

let rent = 10000;

if (rent <= 10000) {
    console.log("I will take the house")
} else {
    console.log("This is out of my budget!")
} 





// ** Switch

// - If I have many conditions to apply then recommended option is "Switch"

const day = "Friday";

switch (day) {
  case "Saturday":
    console.log("Today is " + day);
    break;
  case "Sunday":
    console.log("Today is " + day);
    break;
  case "Monday":
    console.log("Today is " + day);
    break;
  case "Tuesday":
    console.log("Today is " + day);
    break;
  case "Wednesday":
    console.log("Today is " + day);
    break;
  case "Thursday":
    console.log("Today is " + day);
    break;
  case "Friday":
    console.log("Today is " + day);
    break;
  default:
    break;
}






// ** Ternary Operator

// - Short form of writing conditional statements

// condition ? "If the condition is True" : "If the condition if False"


// ----- Example

const myName = "Faisal";

const isPlayer  = myName === "Faisal" ? "You are a Player" : "You are a visitor"
console.log(isPlayer);