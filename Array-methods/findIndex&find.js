// it work same as filter but returns first element passes test
// syntax: array.find(callbackfunct)
// syntax: array.findIndex(callbackfunct)

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

// find ----
let a = voters.find((current, index) => {
  if (current.voted === true) return current;
});
console.log(a);
// output :

// {
//     age: 30,
//     name: "Bob",
//     voted: true
//   }


// findIndex ------
let a = voters.findIndex((current, index) => {
  if (current.voted === true) return current;
});
console.log(a);
// it returns index of first element passed test
// output : 0
