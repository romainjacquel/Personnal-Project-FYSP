const passport = require('passport')
const User = require('../models/user')
const config = require('../../config')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    secretOrKey : config.secret
};

const jwtVerifyToken = new JwtStrategy(jwtOptions,function(payload,done){
    const userId = payload.sub;
    User.findById(userId,function(err,user){
        if(err){
            return done(err,false)
        }
        if(user){
            return done(null,user)
        }else{
            return done(null,false)
        }
    })
})

passport.use(jwtVerifyToken);