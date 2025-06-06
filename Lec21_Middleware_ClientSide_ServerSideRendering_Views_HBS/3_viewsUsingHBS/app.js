const express=require('express')
const app=express();

app.use(express.json());//json Middleware
app.set('view engine','hbs')//Set HBS as template engine

const port=4000;

const title = 'Movie List';
const movies = [
    { id: 1, title: 'Inception', year: 2010 },
    { id: 2, title: 'The Matrix', year: 1999 },
    { id: 3, title: 'Interstellar', year: 2014 }
];

const phoneNo = '123-456-7890';
const email = 'example@email.com';

app.get('/movies',(req,res,next)=>{
    res.render('movies.hbs',{title,movies})
})


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})