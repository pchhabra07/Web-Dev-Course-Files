const express=require('express')

const app=express();

const port=4000;

//Generic Middleware
app.use((req,res,next)=>{
    console.log(`${req.method} request for ${req.url} inside middleware 1`)
    next();//Calls the next middleware, very imp.
})

app.use((req,res,next)=>{
    console.log(`${req.method} request for ${req.url} inside middleware 2`)
    next();//Calls the next middleware, very imp.
})

//Path Matching Middleware
app.use('/hello/:id',(req,res,next)=>{
    console.log('inside path matching middleware');
    //res.send(`Hello from path matching middleware! ID: ${req.params.id}`);
    next();
})

//Exact Path Matching Middleware
app.use('/hello/world',(req,res,next)=>{
    console.log('inside exact path matching middleware');
    res.send('Hello from exact path matching middleware');
})

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})