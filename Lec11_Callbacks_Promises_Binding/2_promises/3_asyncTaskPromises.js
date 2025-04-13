function download(){
    console.log("Download started")
    return new Promise((resolve,reject)=>{
        let downloadCompleted=true;
        setTimeout(()=>{
            if(downloadCompleted){
                resolve("Download completed")
            }
            else{
                reject("Download not completed")
            }
        },5000)
    }) 
}

function compress(msg){
    console.log(msg);
    console.log("compress started")
    return new Promise((resolve,reject)=>{
        let compressCompleted=true;
        setTimeout(()=>{
            if(compressCompleted){
                resolve("compress completed")
            }
            else{
                reject("compress not completed")
            }
        },5000)
    }) 
}

function upload(msg){
    console.log(msg);
    console.log("upload started")
    return new Promise((resolve,reject)=>{
        let uploadCompleted=true;
        setTimeout(()=>{
            if(uploadCompleted){
                resolve("upload completed")
            }
            else{
                reject("upload not completed")
            }
        },5000)
    }) 
}

function allDone(msg){
    console.log(msg);
    console.log("Process Completed")
}

download()
    .then(compress)
    .then(upload)
    .then(allDone)
    .catch((msg)=>{
        console.log(msg);
    })