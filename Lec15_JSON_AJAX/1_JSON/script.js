let p1 ={
    name: 'xyz',
    age: 19,
    city: 'Delhi',
    college: 'MAIT'
}
let arr=[5,1,'hi',true];

let stringifiedP1= JSON.stringify(p1);
let stringifiedArr= JSON.stringify(arr);

let parsedP1= JSON.parse(stringifiedP1);
let parsedArr= JSON.parse(stringifiedArr);

// console.log(p1,stringifiedP1);
// console.log(arr,stringifiedArr);

console.log(stringifiedP1,parsedP1);
console.log(stringifiedArr,parsedArr);