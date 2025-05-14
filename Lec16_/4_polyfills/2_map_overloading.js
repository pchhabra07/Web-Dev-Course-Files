//=====================================================
//This was just to experiment. It was not done in class.
//=====================================================

//Here, we tried to overload the ".map" function by passing another argument as well.
Array.prototype.map=function(fun,x){
    let newArray=[];
    let arr=this;
    for(let i=0;i<arr.length;i++){
        newArray.push(fun(arr[i]));
        console.log(x);
    }

    return newArray;
}

let arr=[1,2,3,4];
let newArr1=arr.map((val)=>{
    return val*val;
},5);

let newArr2=arr.map((val)=>{
    return val*val*val;
});

console.log(newArr1);
console.log(newArr2);
//As we can see, the function that we modified is the one that will run always and an "undefined" value will go into "x" if not specified. Two different functions will not run.