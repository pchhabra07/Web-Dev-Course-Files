const express=require('express')
const app=express();

app.use(express.json());//json Middleware
app.use(express.urlencoded({extended:true}));//urlencoded Middleware

const port=4000;

const movies = [
    { id: 1, title: 'Inception', year: 2010 },
    { id: 2, title: 'The Matrix', year: 1999 },
    { id: 3, title: 'Interstellar', year: 2014 }
];
//Server Side Rendering
app.get('/site',(req,res)=>{
    let html=`<h1>Movie List</h1><ul>`;
    movies.forEach((item,index,arr)=>{
        html+=`<li>${item.title} (${item.year})</li>`
    })
    html+=`</ul>`;
    res.send(html);
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})