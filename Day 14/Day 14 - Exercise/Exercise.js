// ------------------ Exercise 1 Start ------------------  : (3)

// Exercise-1: (3)
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a, b) {
  if (a.includes(b)) {
    return b + a;
  } else {
    return a + b;
  }
}

console.log(myFunction("cheese", "cake")); //'cheesecake'
console.log(myFunction("lips", "s")); //'slips'
console.log(myFunction("Java", "script")); //'Javascript'
console.log(myFunction(" think, therefore I am", "I")); //'I think, therefore I am'

// ------------------ Exercise 1 End ------------------

// ------------------ Exercise 2 ------------------

// ------------------ Exercise 2 ------------------
