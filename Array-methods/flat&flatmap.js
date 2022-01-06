// flats the array  and returns new array.
// array.flat(depth)

const arr = [2,[[3,4,5]]]

const arr1 = arr.flat(1);
console.log(arr1)
// output: [2, [3, 4, 5]]

// flattens the array of arrays into single array, it is diff from map. map returns one array to one array
const friends = [
    {name: 'Dave', kids: ['Max', 'Jack']},
    {name: 'Max', kids: ['Sam', 'Alex', 'Megan']},
    {name: 'Jordan', kids: ['Mason', 'Cameron', 'Kaylin']}
];
const mapFunction = p => p.kids;
const kidNames = friends.flatMap(mapFunction);
// output: ["Max", "Jack", "Sam", "Alex", "Megan", "Mason", "Cameron", "Kaylin"]

// if will use map then,
// output: [["Max", "Jack"], ["Sam", "Alex", "Megan"], ["Mason", "Cameron", "Kaylin"]]