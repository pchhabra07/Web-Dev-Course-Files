function debounce(cb){
    let timer;
    return function(){
        //Has timer and cb in its closure.
        clearTimeout(timer);

        timer = setTimeout(cb,2000)
    }
}


const inputBox=document.getElementById('input-box').addEventListener('keydown',debounce(fun));

function fun(){
    console.log(document.getElementById('input-box').value);
}