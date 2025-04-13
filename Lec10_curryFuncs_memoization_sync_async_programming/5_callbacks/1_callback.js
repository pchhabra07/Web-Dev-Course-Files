function f1(cb){
    setTimeout(()=>{
        console.log("Maggi aa gyi ghar pe!");
        cb(f3);
    },5000);
}

function f2(cb){
    setTimeout(()=>{
        console.log("Maggi ban gyi");
        cb();
    },4500);
}

function f3(){
    setTimeout(()=>{
        console.log("Maggi serve ho gyi");
    },4000);
}

f1(f2);