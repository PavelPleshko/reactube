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

const signup = ({user,csrfToken}) => {
	return fetch('/api/users/signup',{
		method:'POST',
		headers:{
			'Accept': 'application/json',
      'Content-Type': 'application/json',
      'CSRF-Token': csrfToken
    },
     body: JSON.stringify(user)
	})
 
  .then(handleErrors)
  .then(res=>res.json())
  
}


const signin = ({user,csrfToken}) => {
  return fetch('/api/auth/signin/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
         'CSRF-Token': csrfToken
      },
      credentials: 'include',
      body: JSON.stringify(user)
    })
  .then(handleErrors)
  .then(res=>res.json())
}

const clearHistory = ({csrfToken}) => {
  return fetch('/api/users/history/clear', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'CSRF-Token': csrfToken
      },
      credentials: 'include'
    })
  .then(handleErrors)
  .then(res=>res.json())
}



export {
	signin,signup,

  clearHistory
}