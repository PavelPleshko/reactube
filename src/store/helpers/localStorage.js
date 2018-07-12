const getToken = ()=>{
	try{
		return localStorage.getItem('jwtToken');
	}catch(err){
		return undefined;
	}
}


const setToken = (token)=>{
	try{
		return localStorage.setItem('jwtToken',JSON.stringify(token));
	}catch(err){
		return undefined;
	}
}

const removeToken = ()=>{
	localStorage.removeItem('jwtToken');
	return true;
}


export {
	getToken,setToken,removeToken
}