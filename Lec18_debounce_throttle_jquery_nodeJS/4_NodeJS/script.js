//To import the functions exported by "lib.js", we use the following syntax:

//require() method will get us the exported object which has the functions and
//{add,subtract} will destructurise the imported object into actual variables in this file
//of the name as mentioned in the imported object.
// const {add,subtract}=require('./lib');

//Alternate syntax is:
import obj from './lib.js'


console.log(obj);