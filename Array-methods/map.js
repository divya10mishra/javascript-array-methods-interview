// returns new array mapping each value
// syntax:: map((element, index) => { /* ... */ })


// diff between - forEach and map-- map return another array but forEach only iterates
//https://codeburst.io/javascript-map-vs-foreach-f38111822c0f


// diff between - flatMap and map-- map only maps one to one element but flat map maps many array of array and return single array
//https://medium.com/@daveford/map-versup-flatmap-14780ab01d2b


// multiply each element of array by 2 and return array.
let c = [4,8,6,2,0];
function abc(arr){
 let x= arr.map((current)=>{
 return current*2
 })
 console.log(x)
}
abc(c) // output: [8, 16, 12, 4, 0]