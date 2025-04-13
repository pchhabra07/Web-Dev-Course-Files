let intervalId=setInterval(()=>{
    console.log("Hello how are you");
},2000);

setTimeout(()=>{
    clearInterval(intervalId);
},8050);