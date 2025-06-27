const express = require('express');
const passport = require('passport');
const isLoggedIn = require('../middlewares/isLoggedIn')

const {postLogin, getLogin, getLogout, getProfile,getGoogle, getGoogleSuccess} = require('../controllers/user')

const router = express.Router();

router.post('/login', postLogin)

router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect:'/login'}), getGoogleSuccess)

router.get('/google',passport.authenticate( 'google', {scope:['email', 'profile']} ), getGoogle)

router.get('/login',getLogin)

router.get('/profile',isLoggedIn,getProfile)

router.get('/logout',getLogout)

module.exports= router;