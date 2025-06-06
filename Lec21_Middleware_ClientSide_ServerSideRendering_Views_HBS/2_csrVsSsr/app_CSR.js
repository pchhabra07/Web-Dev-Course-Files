const express=require('express')
const app=express();

app.use(express.json());//json Middleware
app.use(express.urlencoded({extended:true}));//urlencoded Middleware

const port=4000;

//Client Side Rendering
//Here, we send the whole html file to the client on API call
app.get('/',(req,res,next)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})