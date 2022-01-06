// Array.of---- creates a new array instance
// syntax:: Array.of(element0, element1, /* ... ,*/ elementN)

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]
Array.of(undefined); // [undefined]
Array.of(1);         // [1]


// Array.isArray------------- determines weather passed value is array or not
// syntax: Array.isArray(value)

Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
Array.isArray(true);  //false
Array.isArray(false); //false
Array.isArray(Array.prototype); // true


// diff between instanceOf and isArray, isArray prefered over instanceOf because it works on iframes.
// iframe - html doc embedded inside another html doc in website.

