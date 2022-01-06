//push, pop, shift, unshift
// you can add multiple at a time ising push and unshift but remove one at a time

// push add one element from last---
const array1 = [1, 2, 3];
array1.push(4,6,9)
console.log(array1) // output: [1,2,3,4,6,9]

// pop removes one element from last
const array1 = [1, 2, 3];
array1.pop()
console,log(array1) //output: [1,2]

// unshift add one element froim start
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
// expected output: 5
console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]


// shift remove one element from start
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
// expected output: Array [2, 3]