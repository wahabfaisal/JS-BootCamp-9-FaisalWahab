// ** Nested Loop
- For every step of the parent loop, child loop will occur completely

for (let i = 1; i <= 3; i++) {
    console.log(i);
    for (let m = 1; m <= 3; m++) {
        console.log(i, m);
    }
}

// ** Looping to a String
- Accessing each string character by incresing the index number.

let a = "Faisal-Wahab"
let q = 0;
let p = 0;

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

while (q < a.length) {
    console.log(a[q]);
    q++;
}

do{
    console.log(a[p]);
    p++;
} while(p < a.length);

// ** Looping with an Array

let arr1 = ["Faisal", "Sakib", "Wahab", "Joshim"];

for (let k = 0; k < arr1.length; k++) {
  console.log(arr1[k]);
}

// ** Looping with Object using for-in loop

const emp = {
  name: "Faisal",
  age: 30,
  country: "Bangladesh",
};

for (key in emp) {
  console.log(emp[key]);
}

// ** Loop with Array using for-of loop

let arr1 = ["Faisal", "Sakib", "Wahab", "Joshim"];

for (item of arr1) {
    console.log(item);
}

// ** Looping inside Function

const arr2 = ["F", "A", "I", "S", "A", "L"];

function arr2Items(param) {
  for (item of param) {
    console.log(item);
  }
}

arr2Items(arr2);
