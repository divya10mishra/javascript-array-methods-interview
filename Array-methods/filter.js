// returns new array with with all those elements which passes test.
//syntax: array.filter(callbackfunct)

// all objects who have voted:true

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let a = voters.filter((current,index)=>{
    if (current.voted===true)
       return current;
    })
    console.log(a)

    // output: 
    // [{
    //     age: 30,
    //     name: "Bob",
    //     voted: true
    //   }, {
    //     age: 32,
    //     name: "Jake",
    //     voted: true
    //   }, {
    //     age: 21,
    //     name: "Phil",
    //     voted: true
    //   }, {
    //     age: 55,
    //     name: "Ed",
    //     voted: true
    //   }, {
    //     age: 54,
    //     name: "Tami",
    //     voted: true
    //   }, {
    //     age: 41,
    //     name: "Joey",
    //     voted: true
    //   }, {
    //     age: 30,
    //     name: "Jeff",
    //     voted: true
    // }]