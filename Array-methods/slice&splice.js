// slice- returns required range of elements from array ------------- 
// output - arr.slice(start,end) end is excluded element.

const array1 = [1,2,3,7,8,9,3];
arr = array1.slice(2,4)
console.log(array1) //[1, 2, 3, 7, 8, 9, 3]
console.log(arr) //[3, 7]

// splice - returns deleted elements range or replaced elements
// output - splice(start, deleteCount, item1, item2, itemN)

const array1 = [1,2,3,7,8,9,3];
arr = array1.splice(2,4,5)
console.log(array1) //[1,2,5,3]
console.log(arr) //[3,7,8,9]
