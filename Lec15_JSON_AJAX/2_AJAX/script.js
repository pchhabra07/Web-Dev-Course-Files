let url= 'https://meowfacts.herokuapp.com/?count=3';

const xhr= new XMLHttpRequest();

xhr.open("GET",url);

xhr.onload = (data)=>{
    console.log(data);
    let res= JSON.parse(data.target.response);
    console.log(res);
    console.log(res.data);
}

xhr.onerror = (error)=>{
    console.log(error);
}

xhr.send();