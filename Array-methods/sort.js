// sort array into ascending to descending by default and gives shallow copy
const a =['aab','abb','aaa','acb']
let b=a.sort()
console.log(b) // ["aaa", "aab", "abb", "acb"]
console.log(a) //["aaa", "aab", "abb", "acb"]

let c = [4,8,6,2,0];
console.log(c.sort()) // [0, 2, 4, 6, 8]