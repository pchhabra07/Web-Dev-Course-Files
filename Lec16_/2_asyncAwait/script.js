let url= 'https://meowfacts.herokuapp.com/?count=3';

async function getData(){
    try{
        let res=await fetch(url);
        let data= await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

getData();