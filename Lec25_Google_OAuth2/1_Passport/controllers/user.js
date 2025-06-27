
module.exports.postLogin = (req, res) => {
    return res.redirect('/google')
}

module.exports.getLogin = (req, res) => {
    return res.render('login')
}


module.exports.getProfile = (req, res) => {
    return res.render('profile',{username:req.user.displayName, email:req.user.email})
}

module.exports.getLogout = (req, res) => {
    req.session.destroy(err=>{
        if(err){
            res.status(500).json({messgae:'Logout Failed'})
        }
        return res.redirect('/login')
    })
}

module.exports.getGoogle = (req, res) => {
    console.log('In /google controller function')
}

module.exports.getGoogleSuccess = (req, res) => {
    return res.render('profile',{username:req.user.displayName, email:req.user.email})
}
