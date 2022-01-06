const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3 to 4 and 4 is excluded as in all so only 3 i.e 'd'
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// it provides a shallow copy
console.log(array1)
// output: ["d", "b", "c", "d", "e"]