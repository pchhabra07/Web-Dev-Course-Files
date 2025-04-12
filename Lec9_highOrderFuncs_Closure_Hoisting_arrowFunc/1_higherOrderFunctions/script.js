function generator(){
    function innerFunc(){
        console.log("I am inside another function");
    }

    return innerFunc;
}

let f=generator();//f will get innerFunc as generator is called and it returns innerFunc

// function user(fun){
//     fun();
// }

function hof(fun){
    function hello(){
        fun();
        console.log("Hello");
    }

    return hello;
}

let f2=hof(f);
f2();