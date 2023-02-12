// ** Nested Loop
- For every step of the parent loop, child loop will occur completely

for (let i = 1; i <= 3; i++) {
    console.log(i);
    for (let m = 1; m <= 3; m++) {
        console.log(i, m);
    }
}