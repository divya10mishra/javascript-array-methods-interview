// --add price of all -----------

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function abc(arr){
  let a = arr.reduce((acc,current)=>{
    acc += current.price;
    return acc;
  },0)
  console.log(a)
}
abc(wishlist)

// ----using find return first true object only ----
// -----using findIndex return first true index of that object only---

let a = voters.find((current,index)=>{
if (current.voted===true)
   return current;
})
console.log(a)


// ----------------flatten arrays inside array using reduce------------

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
function flatten(arr){
  let a = arr.reduce((acc,current)=>{
  acc += current
  return acc;
 })
 console.log(a)
}
flatten(arrays)