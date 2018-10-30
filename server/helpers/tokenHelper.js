import jwt from 'jsonwebtoken';

const DEFAULT_EXPIRATION = 60*60*24;

const createJwtToken = (secret,payload,expires=DEFAULT_EXPIRATION) => {
  const token= jwt.sign(payload, secret,{expiresIn:expires});
  return token;
}

const verifyToken = (token,secret)=>{
	return new Promise((resolve,reject)=>{
		jwt.verify(token,secret,(err,res)=>{	
			if (err){
				switch(err.name){
					case 'TokenExpiredError':
						err.message = 'token has expired';
						err.code = 401;
					  	break;
					default:
						err.message = 'Unknown error occurred. Try again later';
						err.code = 500;
				}
				reject(err);
			}else{
				resolve(res)
			}
	});	
})
}

export {
	createJwtToken,
	verifyToken
}