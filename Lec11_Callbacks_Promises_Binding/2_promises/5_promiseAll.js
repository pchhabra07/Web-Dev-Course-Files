let p1=new Promise((res,rej)=>{
    console.log("Data set 1 encryption started...");
    let dataEncryptionFinished=false;
    setTimeout(()=>{
        if(dataEncryptionFinished){
            res("Data set 1 encryption is finished now...");
        }
        else{
            rej("Data set 1 encryption failed...");
        }
    },2000)
})

let p2=new Promise((res,rej)=>{
    console.log("Data set 2 encryption started...");
    let dataEncryptionFinished=true;
    setTimeout(()=>{
        if(dataEncryptionFinished){
            res("Data set 2 encryption is finished now...");
        }
        else{
            rej("Data set 2 encryption failed...");
        }
    },3000)
})


//goes to .then and .catch on the basis of which ever promise's execution finished first.
// Promise.race([p1,p2])
//     .then((msg)=>{
//         console.log(msg);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


//waits for finishing of execution of all promises and gives message of all promises in an array if all are resolved.
//if even one is rejected, it goes to catch for that one.
Promise.all([p1,p2])
    .then((msg)=>{
        console.log(msg);
    })
    .catch((err)=>{
        console.log(err);
    })