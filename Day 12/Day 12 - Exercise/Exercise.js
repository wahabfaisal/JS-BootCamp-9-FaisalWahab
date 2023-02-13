// ----- # Exercise-1 (what will be the output and explain) -2

// - We are printing from 1 to 10. But for incrementing the num variable by 2, we will get only odd numbers.

let num = 1;
while(num <= 10) {
    console.log(num);
    num += 2;
}

Ans: 1, 3, 5, 7, 9

// ----- # Exercise-2 (what will be the output and explain) -2
// - num variable has starting value of 1.
// - We are looping from 1 to 20.
// - Inside "while" loop, we have set condition to check the remainder value after division by 4, is equvalent to 0, print that num.

let num = 1;

while (num <= 20) {
  if (num % 4 === 0) {
    console.log(num);
  }
  num++;
}

Ans: 4, 8, 12, 16, 20;

// ----- # Exercise-3 (what will be the output and why?) -2

// - We are printing the num variable but not increasing the value.
// - Here beause of num-- condition, this loop will go infinite loop and browser will crash.

let num = 100;

while (num < 150) {
  console.log(num + 1);
  num--;
}

Ans: This is an infinite Loop. Resutlt will be browser crash.

//  ----- # Exercise -4 (what will be the output? it May require if condition inside loop)-4
// Print out all even numbers between 1 and 100. Write two solutions:

// With: for loop.

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// With: while loop

let k = 1;

while (k <= 100) {
  if (k % 2 === 0) {
    console.log(k);
  }
  k++;
}

//  ----- # Exercise-5 (Run loop and add $ in each repetition)-4

function repeat(num) {
  let dollar = "";

  for (let i = 1; i <= num; i++) {
    for (let m = 1; m <= i; m++) {
      dollar += "$";
    }
    dollar += "\n";
  }
  return dollar;
}

console.log(repeat(5));

// ----- # Exercise-6 (What will be the output and Let's explain) -3
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);

// ----- # Exercise-7: Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b - 3

function myFunction(a, b) {
  let count = 0;
  for (let m of b) {
    console.log(m);
    if (m === a) {
      count++;
    }
  }
  return count;
}

console.log(
  myFunction("m", "how many times does the character occur in this sentence?")
); //2
console.log(
  myFunction("h", "how many times does the character occur in this sentence?")
); //4
console.log(
  myFunction("?", "how many times does the character occur in this sentence?")
); //1
console.log(
  myFunction("z", "how many times does the character occur in this sentence?")
); //0
