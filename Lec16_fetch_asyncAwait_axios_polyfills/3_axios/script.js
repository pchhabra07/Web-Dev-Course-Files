let url= 'https://meowfacts.herokuapp.com/?count=3';

async function getData(){
    try{
        let res=await axios.get(url);
        console.log(res.data);
    }
    catch(err){
        console.log(err);
    }
}

getData();