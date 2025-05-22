function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

//To export these functions from this file, it is done using "module.exports".
// module.exports={
//     add,
//     subtract
// }

//Alternate syntax is:
export default{
    'add':add,
    'subtract':subtract
}