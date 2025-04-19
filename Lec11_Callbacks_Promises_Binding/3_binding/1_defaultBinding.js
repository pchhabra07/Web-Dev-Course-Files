var x=1;
var s="hello";

//This keyword points to the global scope of the file.
function fun(){
    console.log(this.s);
}

fun();