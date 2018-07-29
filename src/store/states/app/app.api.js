import queryString from 'query-string';

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


const getSearchSuggestions = (params) => {
  let query = queryString.stringify(params);
  return fetch('/api/media/suggestions?'+query,{
    method:'GET',
    headers:{
      'Accept': 'application/json'
    }
  })
  .then(handleErrors)
  .then(res=>res.json()) 
}



export {
	getSearchSuggestions,
  
}