let arr=[1,'b',5,false,9];
console.log(arr);

// //Adding and removing elements from back
// arr.push(10);
// arr.push('new element');
// console.log(arr);
// arr.pop();
// console.log(arr);

// //Concat function (this returns a new array and does not modify the existing one)
// let arr2=[5,8];
// arr=arr.concat(arr2);

// console.log(arr);

//Splice (takes argument as the index and number of elements to delete and goes to that index to remove the elements there)
arr.splice(2,1);
console.log(arr);