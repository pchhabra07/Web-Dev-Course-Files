let kalTimeSeAunga=new Promise((resolve,reject)=>{
    let kalTimeSeAaya=false;
    if(kalTimeSeAaya){
        resolve("Aaja andar beth ja...");
    }
    else{
        reject("bahar nikal nalayak...");
    }
})

kalTimeSeAunga
    .then((msg)=>{
        console.log(msg);
        return "task kar"
    })

    .then((msg)=>{
        console.log(msg);
        return "shabaash"
    })

    .then((msg)=>{
        console.log(msg);
    })

    .catch((err)=>{
        console.log(err);
    })