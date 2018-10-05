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

const getChannelsTopics = () => {
  return fetch('/api/channels/topic/all', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
  .then(handleErrors)
  .then(res=>res.json())
}




export {
	getChannelsTopics
}