// (function fun(){
//     var x=10;
//     console.log(x);
// })()
// var x=1;
// (function greet(name){
//     console.log(`hi ${name}`);
// })('jack')

// let module1 =(function(){
//     var x=10;
//     function myfun(){
//         console.log(new Date());
//     }

//     return {
//         val:x,
//         fun:myfun
//     }
// })();

var counter = (function(){
    var cnt=0;

    function increment(){
        cnt++;
        console.log(cnt)
    }

    function decrement(){
        cnt--;
        console.log(cnt)
    }

    return{
        //When key is not specified, value itself becomes the key.
        increment,
        decrement
    }
})()

counter.increment();
counter.increment();
counter.decrement();