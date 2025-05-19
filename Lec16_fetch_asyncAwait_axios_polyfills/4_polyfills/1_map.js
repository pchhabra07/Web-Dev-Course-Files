let arr=[1,2,3,4,5];

Array.prototype.myMap=function(fun){
    //The new array that will be returned by this function similar to map function.
    let newArray=[];
    //According to implicit binding, "this" keyword corresponds to the object which called this method hence the array on which this method is being called.
    let arr=this;

    for(let i=0;i<arr.length;i++){
        newArray.push(fun(arr[i],i,arr));
    }
    console.log("This statement is the additional task that a polyfill can do and not the actual map function.");
    return newArray;
}

let newArr=arr.myMap((item,index,arr)=>{
    return item*item;
})

console.log(newArr);