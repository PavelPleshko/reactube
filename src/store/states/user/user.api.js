function handleErrors(response) {
    if (response.ok || response.statusCode == 200) {
         return response;
    }else{
         return response.json().then(err=>{
          throw new Error(     
            `Error ${err.status}: ${err.message}`
          )});
    }   
}

const signup = (user) => {
	return fetch('/api/users/signup',{
		method:'POST',
		headers:{
			'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     body: JSON.stringify(user)
	})
 
  .then(handleErrors)
  .then(res=>res.json())
  
}


const signin = (user) => {
  return fetch('/api/auth/signin/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    })
  .then(handleErrors)
  .then(res=>res.json())
}



export {
	signin,signup
}