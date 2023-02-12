** Loop:

- Loop is used to reduce duplicate code
- To maintain DRY (Do It Yourself) technique

** Kind of Loops

- While Loop
- Do While
- For Loop



** While Loop

while (condition) {
    // If the condition is true, this block of code will execute.
}

let count = 1;

while(count <= 5) {
    console.log(`${count}`);
    count++;
}

- If the condition is TRUE always and will not be FALSE, Loop will be executed for infinite time




**- do While Loop

- In do-while loop, the condition will be inside do block.
- Even if the condition is false, it will execude the code for 1 time.

let num = 0;

do {
    console.log(num); // 0
    num++;
} while (num == 5);




** For Loop

for (initialization; condition; increment) {
    // If the condition is true, this code will be executed.
}

for (let f = 0; f <= 5; f++) {
    console.log(f);
}

- Reverse Loop
- Initialize with the highest value
- Must use "Decrement"

for (let i = 5; i >=0; i--) {
    console.log(i);
}




** Break and Continue


// Continue

- Only true condition will be skipped but program will finish.
- Below function will show 0 to 10, except 4 (because 4 matches the condition).

for (let i = 0; i <=10; i++) {
    if (i === 4) {
        continue;
    }
    console.log(i);
}


// Break 

- once condition is true after that the program will stop.
- Below function iwll show 0 to 3, because once program reached to 4 it will break the program. 

for (let i = 0; i <=10; i++) {
    if (i === 4) {
        break;
    }
    console.log(i);
}

