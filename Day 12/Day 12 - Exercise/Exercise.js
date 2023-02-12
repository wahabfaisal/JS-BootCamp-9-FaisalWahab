// ----- # Exercise-1 (what will be the output and explain) -2

// - We are printing from 1 to 10. But for incrementing the num variable by 2, we will get only odd numbers.

// let num = 1;
// while(num <= 10) {
//     console.log(num);
//     num += 2;
// }

// Ans: 1, 3, 5, 7, 9

// ----- # Exercise-2 (what will be the output and explain) -2
// - num variable has starting value of 1.
// - We are looping from 1 to 20.
// - Inside "while" loop, we have set condition to check the remainder value after division by 4, is equvalent to 0, print that num.

// let num = 1;

// while (num <= 20) {
//   if (num % 4 === 0) {
//     console.log(num);
//   }
//   num++;
// }

// Ans: 4, 8, 12, 16, 20;

// ----- # Exercise-3 (what will be the output and why?) -2

// - We are printing the num variable but not increasing the value.
// - Here beause of num-- condition, this loop will go infinite loop and browser will crash.

// let num = 100;

// while(num < 150) {
//     console.log(num + 1);
//     num--;
// }

// Ans: This is an infinite Loop. Resutlt will be browser crash.

//  ----- # Exercise -4 (what will be the output? it May require if condition inside loop)-4
// Print out all even numbers between 1 and 100. Write two solutions:

// one with a for loop.

// for (let i = 1; i <= 100; i++) {
//     if((i % 2) === 0) {
//         console.log(i);
//     }
// }

// one with a while loop

// let k = 1;

// while (k <= 100) {
//     if ((k % 2) === 0) {
//         console.log(k);
//     }
//     k++;
// }
