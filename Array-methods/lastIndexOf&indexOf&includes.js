// check weather particular element is avaialable in array returns bollean 
//syntax::
// includes(searchElement)
// includes(searchElement, fromIndex)

[1, 2, 3].includes(2)         // true
[1, 2, 3].includes(4)         // false
[1, 2, 3].includes(3, 3)      // false
[1, 2, 3].includes(3, -1)     // true


//indexOf-----------
// returns first element at given index, -1 if not found

//syntx::
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2


// lastIndexOf-----------
// returns index at which last time that particular value exist
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3