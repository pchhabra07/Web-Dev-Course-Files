// document.querySelector('body').addEventListener('click',(event)=>{
//     event.target.style.backgroundColor='red';
//     setTimeout(()=>{
//         event.target.style.backgroundColor='';
//     },1000)
// })

// document.querySelector('body').addEventListener('dblclick',(event)=>{
//     event.target.style.backgroundColor='yellow';
//     setTimeout(()=>{
//         event.target.style.backgroundColor='';
//     },1000)
// })

// document.querySelector('#movie-heading').addEventListener('mouseover',(event)=>{
//     alert('You are on heading')
// })

// document.querySelector('body').addEventListener('keydown',(event)=>{
//     alert('key is pressed');
// })

// document.querySelector('body').addEventListener('keyup',(event)=>{
//     alert('key is up');
// })


window.addEventListener('scroll',(event)=>{
    let xPosition=window.scrollX;
    let yPosition=window.scrollY;

    console.log(xPosition,yPosition);
})