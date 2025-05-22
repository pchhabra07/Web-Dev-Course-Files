
function throttle(cb){
    isCalled=false;

    return function(){
        if(isCalled==false){
            isCalled=true;
            cb();
            setTimeout(()=>{
                isCalled=false;
            },4000)
        }
    }
}

const btn=document.getElementById('btn').addEventListener('click',throttle(fun))

function fun(){
    console.log(document.getElementById('input-box').value);
}