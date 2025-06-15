import express from 'express'
import mongoose from 'mongoose'
import session from 'express-session'

import idsAndPass from './models/idsAndPass.js'

const app=express()

app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:'mysecretkey',
    resave:false,
    saveUninitialized:true
}))

app.get('/',(req,res)=>{
    res.redirect('/index')
})

app.get('/register',(req,res)=>{
    if(req.session.user){
        res.redirect('/profile')
    }else{
        res.render('register')
    }
})

app.get('/login',(req,res)=>{
    if(req.session.user){
        res.redirect('/profile')
    }else{
        res.render('login')
    }
})

app.get('/profile',(req,res)=>{
    //Session doesn't exist
    if(!req.session.user){
        res.redirect('/index')
    }
    else{
        res.render('profile',{name:req.session.user.name})
    }
})

app.get('/index',(req,res)=>{
    if(req.session.user){
        res.redirect('/profile')
    }else{
        res.render('index')
    }
})

app.get('/logout',(req,res)=>{
    if(!req.session.user){
        res.redirect('/index')
    }
    else{
        req.session.destroy(err=>{
            if(err){
                res.redirect('/profile')
            }else{
                res.redirect('/index')
            }
        })
    }
})

app.post('/login', async (req,res)=>{
    const {name, password}=req.body;
    if(!name || !password){
        res.redirect('/login')
    }
    else if(!req.session.user){
        const accountData=await idsAndPass.findOne({username:name})
        if(accountData && accountData.password==password){
            req.session.user={name,password}
            res.redirect('/profile')
        }
        else{
            res.redirect('/login')
        }
    }
    else{
        if(req.session.user && req.session.user.name==name && req.session.user.password==password){
            res.redirect('/profile')
        }
        else{
            res.redirect('/login')
        }
    }
})

app.post('/register', async (req,res)=>{
    const {name, password}=req.body;
    if(!name || !password){
        res.redirect('/register')
    }
    else{

        const accountData=await idsAndPass.findOne({username:name})
        if(accountData){
            res.redirect('/register')
        }
        else{
            req.session.user={ name, password }
            idsAndPass.insertOne({username:name, password})
            res.redirect('/login')
        }
    }
})

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    console.log('Database connected...')
    app.listen(3000, () => {       
        console.log('Server is running on http://localhost:3000');
    });
})
.catch(err=>{
    console.log('Error connecting to database: '+err)
})


