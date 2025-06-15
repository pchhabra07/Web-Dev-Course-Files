import express from 'express'
import mongoose from 'mongoose'

import authorRouter from './routes/authorRouter.js'
import bookRouter from './routes/bookRouter.js'

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/author',authorRouter)
app.use('/book',bookRouter)

const port=3000;

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    console.log("Database connected...")
    app.listen(port,()=>{
        console.log(`Server running at 'http://localhost:${port}'`);
    })
})
.catch(err=>{
    console.error(err);
})