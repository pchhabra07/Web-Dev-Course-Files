Array.prototype.myFilter=function(fun){
    let newArray=[];
    let arr=this;

    for(let i=0;i<arr.length;i++){
        if(fun(arr[i])){
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

let arr=[1,2,3,4,5];

let newArr=arr.myFilter((val)=>{
    if(val%2!=0){
        return true;
    }
    else{
        return false;
    }
})

console.log(newArr);