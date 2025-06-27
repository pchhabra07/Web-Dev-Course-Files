const passport = require('passport');   

const GoogleStrategy = require('passport-google-oauth2').Strategy;

require('dotenv/config')

passport.use(new GoogleStrategy({
        clientID:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
        callbackURL:process.env.CALLBACK_URL,
        passReqToCallback:true
    },
    function (request, accessToken, refreshToken, profile, done){
        return done(null,profile)
    }
))

passport.serializeUser((user, done) => {
    console.log("serializeUser running...",user)
    done(null, user);
})

passport.deserializeUser((user,done)=>{        
    console.log("deserializeUser running...",user)
    done(null,user)
})
