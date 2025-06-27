const express = require('express');
const session = require('express-session');
const passport = require('passport');

const authRouter = require('./routes/user')

require('./authentication/passport')

const app = express();
const port = 3000

app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret:'yokey',
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize())
app.use(passport.session())

app.use('/',authRouter)

app.get('/',(req,res)=>{
    return res.render('login')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});