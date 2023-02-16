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

// ------------------ Exercise 2 Start------------------
//Exercise-2:(3)
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function myFunction(a, b) {
  let newArr = a.split("");
  for (let i = newArr.length; i >= 1; i -= 3) {
    newArr.splice(i, 0, b);
  }
  return newArr.join("");
}

console.log(myFunction("1234567", ".")); //'1.234.567.'
console.log(myFunction("abcde", "$")); //'ab$cde$'
console.log(myFunction("zxyzxyzxyzxyzxyz", "w")); //'zwxyzwxyzwxyzwxyzwxyzw'

// ------------------ Exercise 2 End ------------------

// ------------------ Exercise 5 Start ------------------

//Exercise-5:(3)
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function myFunction(a, b) {
  return a < b ? a / b : a * b;
}

console.log(myFunction(10, 100)); // 0.1
console.log(myFunction(90, 45)); //4050
console.log(myFunction(8, 20)); //0.4
console.log(myFunction(2, 0.5)); //1

// ------------------ Exercise 5 End ------------------

// ------------------ Exercise 6 Start ------------------
// Exercise-6:(5)
// For each of the exercises below, assume you are starting with the following people array.

let people = ["samim", "Anis", "Adnan", "Karim"];

// 1.Using a loop, iterate through this array and console.log all of the people one by one.

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2.Write the command to remove "samim" from the array.

console.log(people.shift()); // samim

// 3.Write the command to remove "Karim" from the array.

console.log(people.pop()); // Karim

// 4.Write the command to add "Ifat" to the front of the array.

people.unshift("Ifat");
console.log(people); // ["Ifat", "Anis", "Adnan"]

// 5.Write the command to add your name to the end of the array.

people.push("Faisal");
console.log(people); // ["Ifat", "Anis", "Adnan", "Faisal"]

// 6.Using a loop, iterate through this array and after console.logging "Anis", exit from the loop.

for (let m = 0; m < people.length; m++) {
  if (people[m] == "Anis") {
    break;
  } else {
    console.log(people[m]); // Ifat
  }
}

// 7.Write the command to make a copy of the array using slice. The copy should NOT include "Anis" or "Ifat".

console.log(people.slice(2)); // ["Adnan", "Faisal"]

// 8.Write the command that gives the indexOf where "Anis" is located.

console.log(people.indexOf("Anis")); // 1

// 9.Write the command that gives the indexOf where "Foo" is located (this should return -1).

console.log(people.indexOf("foo")); // -1

// 10.Redefine the people variable with the value you started with.
// Using the splice command, remove "Adnan" from the array and add "Elizabeth" and "Bob".
// Your array 1.should look like this when you are done ["samim", "Anis", "Elizabeth", "Bob", "Karim"].

people = ["samim", "Anis", "Adnan", "Karim"];
people.splice(2, 1, "Elizabeth", "Bob");
console.log(people); // ["Ifat", "Anis", "Elizabeth", "Bob", "Karim"];

// 11.Create a new variable called withMiraz and set it equal to the people array 1.concatenated with the string of "Miraz".

let withMiraz = people;
console.log(withMiraz.concat("Miraz")); // ["Ifat", "Anis", "Elizabeth", "Bob", "Karim", "Miraz"];

// ------------------ Exercise 6 End ------------------
