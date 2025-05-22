//Rather than using
const heading=document.getElementById('heading');

//We'll use JQuery method using $
//This returns an array but for selector using ID, that array will have one element only obviously.
const heading1=$('#heading');

console.log(heading);
console.log(heading1[0]);


//To create or read or update an element
heading1[0].innerText='Your Website';

const p=$('<p></p>').innerText='I am in your website.'
$('body').append(p);

//Events
heading1.click((event)=>{
    console.log(event);
})