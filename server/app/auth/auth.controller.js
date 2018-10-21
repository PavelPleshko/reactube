import User from '../user/user.model';
import expressJwt from 'express-jwt';
import config from '../../config/config';
import {throwIfNoResult,sendSuccess,sendError} from '../../helpers/responseHandler';
import passport from 'passport';
import {createJwtToken} from '../../helpers/tokenHelper';

const AUTH_TOKEN_EXP_TIME_MS = 60*60*1000;

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

     const token = createJwtToken(config.jwtSecret,{
      _id: user._id
    });

    res.cookie("jwt", token, {
      expire:AUTH_TOKEN_EXP_TIME_MS
    });

    sendSuccess(res,'User now logged in')({user,token});
  }catch(error){
    sendError(res)(error);
  } 
}

const checkSessionAndGetUser = (req,res) => {
  try{
     let user = req.user;
     if(req.user){
      const token = createJwtToken(config.jwtSecret,{
      _id: user._id
    });
    res.cookie("jwt", token, {
      expire:60*60*1000
    });
    sendSuccess(res,'User session resumed')({user,token});
  }else{
    sendError(res)({message:'User session expired'});
  }
  }catch(err){
    sendError(res)(error);
  }
}

const signout = (req, res) => {
  res.clearCookie("jwt")
  sendSuccess(res,'Signed out')({});
}

export default { 
  signin, signout,
  checkSessionAndGetUser, 
  requireSignin, 
  hasAuthorization 
}