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

const listAllByMedia = (params) => {
  return fetch('/api/comments/'+params.mediaId,{
    method:'GET',
    headers:{
      'Accept': 'application/json'
    }
  })
  .then(handleErrors)
  .then(res=>res.json()) 
}

const getReplies = (params) => {
  return fetch('/api/comment/replies/'+params.commentId,{
    method:'GET',
    headers:{
      'Accept': 'application/json'
    }
  })
  .then(handleErrors)
  .then(res=>res.json()) 
}

const postComment = (comment) => {
	return fetch('/api/comment/new',{
		method:'POST',
		headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
     credentials: 'include',
     body: JSON.stringify(comment)
	})
  .then(handleErrors)
  .then(res=>res.json()) 
}





export {
	listAllByMedia,
  getReplies,
  postComment
}