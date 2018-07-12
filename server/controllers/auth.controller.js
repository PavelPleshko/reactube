import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import config from './../config/config';
import passport from 'passport';

console.log(passport,'controller');
const requireSignin = (req,res,next)=>{
 
    passport.authenticate('jwt',{session:false},(err,user,info)=>{
    req.user = user;
    next();
  })(req,res,next);
}

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == 
  req.auth._id
  if (!(authorized)) {
    return res.status(403).json({
      error: "User is not authorized"
    })
  }
  next()
}


const signin = (req, res) => {
  User.findOne({
    "email": req.body.email
  }, (err, user) => {
    if (err || !user)
      return res.status(401).json({
        status:401,
        data:null,
        message: "Email is not registered"
      })
    if (!user.authenticate(req.body.password)) {
      return res.status(401).send({
        status:401,
        data:null,
        message: "Password is incorrect."
      })
    }

    const token = jwt.sign({
      _id: user._id
    }, config.jwtSecret)

    res.cookie("jwt", token, {
      expire:60*60*1000
    })

    return res.status(200).json({
      status:200,
      data:{
        token,
        user
      }   
    })
  })
}


const signout = (req, res) => {
  res.clearCookie("t")
  return res.status('200').json({
    message: "signed out"
  })
}


export default { signin, signout, requireSignin, hasAuthorization }