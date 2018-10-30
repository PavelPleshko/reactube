const handleErrors = (response) => {
    if (response.ok || response.statusCode == 200) {
         return response;
    }else{
         return response.json().then(err=>{
          throw new Error(     
            `Error ${err.status}: ${err.message}`
          )});
    }   
}

const listAll = () => {
	return fetch('/api/media/category/all',{
		method:'GET',
		headers:{
			'Accept': 'application/json'
    }
	})
  .then(handleErrors)
  .then(res=>res.json()) 
}





export {
	listAll
}