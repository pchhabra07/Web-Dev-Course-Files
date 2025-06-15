const express=require('express')
const cookies=require('cookies')

const app=express()

const port=3000;

app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.redirect('/home')
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login',(req,res)=>{
    const {name,password}=req.body;

    if(!name || !password){
        res.status(400).send('Name and password are required.')
    }

    //Set Cookie
    const cookiesInstance=new cookies(req,res);

    cookiesInstance.set('user', JSON.stringify( {name , cnt:0} )  ,{
        maxAge:24 * 60 * 60 * 1000 //1 Day
    })

    res.redirect('/home')

})

app.get('/home',(req,res)=>{
    const cookiesInstance=new cookies(req,res)
    if(!cookiesInstance.get('user')){
        //Not logged in already, can't access home page without login
        res.redirect('/login')
    }
    const user=JSON.parse(cookiesInstance.get('user'));

    // Increment the count and update the cookie
    cookiesInstance.set('user', JSON.stringify({
        name: user.name,
        cnt:user.cnt + 1,
    })
    ,{
        maxAge: 24 * 60 * 60 * 1000
    });

    res.render('home', { name: user.name,  cnt: user.cnt+1 });
})

app.get('/logout',(req,res)=>{
    const cookiesInstance=new cookies(req,res)
    const user=cookiesInstance.get('user')

    if(!user){
        res.redirect('/login')
    }
    
    user=JSON.parse(user)

    cookiesInstance.set('user',null)

    res.redirect('/login')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
