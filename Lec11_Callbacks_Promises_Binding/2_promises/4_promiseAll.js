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
    let dataEncryptionFinished=false;
    setTimeout(()=>{
        if(dataEncryptionFinished){
            res("Data set 2 encryption is finished now...");
        }
        else{
            rej("Data set 2 encryption failed...");
        }
    },3000)
})

// Promise.race([p1,p2])
//     .then((msg)=>{
//         console.log(msg);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// Promise.all([p1,p2])
//     .then((msg)=>{
//         console.log(msg);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })