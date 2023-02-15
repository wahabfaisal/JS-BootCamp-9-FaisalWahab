// JS Built-in Properties and Methods

// ================= Array =================

let arr = [2, 3, 4];

// .push();
// - to add an element at the "end" of the array

arr.push(5);
console.log(arr); // [2, 3, 4, 5 ]

// .unshift();
// - to add an element at the "first" of the array

arr.unshift(1);
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// .pop();
// - to remove the "last" element of the array

arr.pop();
console.log(arr); // [ 1, 2, 3, 4 ]

// .shift();
// - to remove the "first" element of the array

arr.shift();
console.log(arr); // [ 2, 3, 4 ]

// for find out the last element of an array

console.log(arr[arr.length - 1]); // 4

// .slice()
// - slice copy from the main element.

const newArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(newArr.slice(2, 6)); // [ 13, 14, 15, 16 ]

// .splice()
// - splice cuts from the main element.

console.log(newArr.splice(2, 6)); // [ 13, 14, 15, 16, 17, 18 ]
console.log(newArr); // [ 11, 12, 19, 20 ]

// .concat()
// - To add item or multiple items
// - New array can be added

console.log(newArr.concat("S")); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 'S' ]

// .join()
// - To join items into 1 element.

console.log(newArr.join("_")); // 11_12_13_14_15_16_17_18_19_20

// .indexOf()
// - To find the index number of a element inside array
// - if array item is not present .indexOf() will return -1.

console.log(newArr.indexOf(15)); // 4

// .fill()
// - To fill the complete array with same value;

console.log(new Array(5).fill("Faisal")); // [ 'Faisal', 'Faisal', 'Faisal', 'Faisal', 'Faisal' ]

// .isArray()
// - To check if it is an Array (Return True || False)

console.log(Array.isArray(newArr)); // True

// .reverse()
// - reverse all the values of the Array

console.log(newArr.reverse());

// ================= Object =================

const newObj = {
  name: "Faisal",
  age: 30,
  country: "Bangladesh",
  Hobby: "Cricket",
};

// in
// - to check if the property is available inside object or not (Return true || false)

console.log("name" in newObj); // true
console.log("roll" in newObj); // false

const keys = Object.keys(newObj);
console.log(keys); // [ 'name', 'age', 'country', 'Hobby' ]

const values = Object.values(newObj);
console.log(values); // [ 'Faisal', 30, 'Bangladesh', 'Cricket' ]
