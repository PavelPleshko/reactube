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

const postComment = (params) => {
  return fetch('/api/comment/new',{
    method:'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'CSRF-Token': params.csrfToken
    },
     credentials: 'include',
     body: JSON.stringify(params.comment)
  })
  .then(handleErrors)
  .then(res=>res.json()) 
}

const likeComment = ({commentId,csrfToken}) => {
  return fetch('/api/comment/like',{
    method:'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'CSRF-Token': csrfToken
    },
     credentials: 'include',
     body: JSON.stringify({commentId})
  })
  .then(handleErrors)
  .then(res=>res.json()) 
}

const dislikeComment = ({commentId,csrfToken}) => {
	return fetch('/api/comment/dislike',{
		method:'POST',
		headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'CSRF-Token': csrfToken
    },
     credentials: 'include',
     body: JSON.stringify({commentId})
	})
  .then(handleErrors)
  .then(res=>res.json()) 
}





export {
	listAllByMedia,
  getReplies,
  postComment,
  likeComment,dislikeComment,
}