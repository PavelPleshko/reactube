import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import config from './../config/config';
import {throwIfNoResult,sendSuccess,sendError} from '../helpers/responseHandler';
import passport from 'passport';

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


const signin = async (req, res) => {
  try {
    const user = await User.findOne({"email": req.body.email})
    .then(throwIfNoResult(result=>!result,400,'not found','Email is not registered'));

    const doesPasswordsMatch = user.authenticate(req.body.password);
    throwIfNoResult(result=>!result,400,'incorrect','Password is incorrect.')(doesPasswordsMatch);

     const token = jwt.sign({
      _id: user._id
    }, config.jwtSecret);

    res.cookie("jwt", token, {
      expire:60*60*1000
    });

    sendSuccess(res,'User now logged in')({user,token});
  }catch(error){
    sendError(res)(error);
  } 
}


const signout = (req, res) => {
  res.clearCookie("t")
  sendSuccess(res,'Signed out')({user,token});
}


export default { signin, signout, requireSignin, hasAuthorization }