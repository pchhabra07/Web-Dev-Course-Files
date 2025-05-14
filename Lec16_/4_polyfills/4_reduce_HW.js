let arr=[1,2,3,4,5,6,7,8,9,10];

Array.prototype.myReduce=function(fun,defaultAccumulatorVal=0){
    let accumulator=defaultAccumulatorVal;
    let arr=this;

    for(let i=0;i<arr.length;i++){
        accumulator=fun(accumulator,arr[i],i,arr);
    }

    return accumulator;
}

let sum=arr.myReduce((accumulator,item,index,arr)=>{
    return accumulator+=item;
});

let sumWith5=arr.myReduce((accumulator,item,index,arr)=>{
    return accumulator+=item;
},5);

console.log(sum);
console.log(sumWith5);