let arr1=[1,2,3,4,5,6,7,8,9];

let newArr = arr1.map((item,index,arr)=>{
    return item*2;
})
console.log(newArr);