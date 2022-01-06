// it checks and return boolean value, true-if all true

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5000 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

// syntax, array.every(callbackfunct)

let a = wishlist.every((current)=>{
  return current.price<500
})

console.log(a)
// output - true