let url= 'https://meowfacts.herokuapp.com/?count=3';

fetch(url)
    //First ".then()" always takes a promise as an argument and the further ".then()"s can take any value as an argument.
    .then((data)=>{
        return data.json();
    })
    // .then(data=>data.json())
    .then(data=>{
        //This data that we received here is an object that was parsed in line 6 or 8.
        console.log(data);

    })
    .catch(err=>{
        console.log(err);
    })
