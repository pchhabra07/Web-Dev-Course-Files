const express=require('express');
const app=express();

const port=3000;

app.use(express.json())

const path=require('path')
const publicPath=path.join(__dirname,'public')

app.use(express.static(publicPath));

const fs=require('fs/promises');
app.get('/tasks',(req,res)=>{
    fs.readFile(path.join(__dirname,'tasks.json'),{encoding:'utf-8'})
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        res.status(500).send('File reading error')
    })
})

app.post('/tasks',(req,res)=>{
    fs.writeFile(path.join(__dirname,'tasks.json'),JSON.stringify(req.body.tasks))
    .then(()=>{
        res.status(200).send('Data saved successfully')
    })
    .catch(()=>{
        res.status(500).send('Data saving error')
    })
})


app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})