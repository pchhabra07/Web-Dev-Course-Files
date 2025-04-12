// hello();

// function hello(){
//     console.log("Hello");
// }


outerfun();

function outerfun(){
    innerfun();
    console.log("I am outside.");
    
    function innerfun(){
        console.log("I am inside.");
    }
}