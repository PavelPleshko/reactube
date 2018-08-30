import queryString from 'query-string';

const serverUrl = process.env.SERVER_URL || 'http://localhost:8080' ;

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

const getDirectUploadDetails = ({resourceType}) => {
	return fetch('/api/media/upload_link?resourceType='+resourceType,{
		method:'GET',
		headers:{
			'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
     credentials: 'include',
	})
 
  .then(handleErrors)
  .then(res=>res.json())
}


const uploadVideo = (options,url,progressReport)=>{
  return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.upload.addEventListener("progress",progressReport);
      
        xhr.onreadystatechange = function(e) {
          if (xhr.readyState == 4){
             let response= JSON.parse(xhr.responseText);
            if(xhr.status == 200){
              resolve(response);
            }else{
              reject(`Uploading failed due to technical reasons.
               Please contact support.`);
            }
            }
          } 
            xhr.send(options);           
          })

}


const create = ({media,csrfToken})=>{
  return fetch('/api/media/new',{
    method:'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'CSRF-Token': csrfToken
    },
     credentials: 'include',
     body: JSON.stringify(media)
  })
  .then(handleErrors)
  .then(res=>res.json())
}


const listPopular = () => {
  return fetch(serverUrl+'/api/media/popular', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(handleErrors)
  .then(res=>res.json())
}

const listHistoryMedia = ({pageNumber,pageSize}) => {
  return fetch(`${serverUrl}/api/media/history?
  page=${pageNumber}&pageSize=${pageSize}&searchField=history`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then(handleErrors)
  .then(res=>res.json())
}

const listWatchlaterMedia = ({pageNumber,pageSize}) => {
  return fetch(`${serverUrl}/api/media/watchlater?
  page=${pageNumber}&pageSize=${pageSize}&searchField=watchlater`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then(handleErrors)
  .then(res=>res.json())
}

const listRelated = ({mediaId}) => {
  return fetch('/api/media/related/'+ mediaId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }) 
  .then(handleErrors)
  .then(res=>res.json())
}

const listByUser = ({userId}) => {
  return fetch('/api/media/by/'+ userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(handleErrors)
  .then(res=>res.json())
}


const read = ({mediaId}) => {
  return fetch(serverUrl+'/api/media/' + mediaId, {
    method: 'GET',
    credentials: 'include'
  })
  .then(handleErrors)
  .then(res=>res.json())
}


const update = ({media,mediaId,csrfToken}) => {
  return fetch('/api/media/' + mediaId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'CSRF-Token': csrfToken
    },
    credentials: 'include',
    body: JSON.stringify(media)
  })
  .then(handleErrors)
  .then(res=>res.json())
}

const remove = ({mediaId,csrfToken}) => {
  return fetch('/api/media/' + mediaId, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'CSRF-Token': csrfToken
    },
    credentials: 'include',
  })
  .then(handleErrors)
  .then(res=>res.json())
}

const like = ({mediaId,csrfToken}) => {
  return fetch('/api/media/like', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'CSRF-Token': csrfToken
    },
    credentials: 'include',
    body: JSON.stringify({mediaId})
  })
  .then(handleErrors)
  .then(res=>res.json())
}

const dislike = ({mediaId,csrfToken}) => {
  return fetch('/api/media/dislike', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'CSRF-Token': csrfToken
    },
    credentials: 'include',
    body: JSON.stringify({mediaId})
  })
  .then(handleErrors)
  .then(res=>res.json())
}

const searchMediaBy = (params) => {
  let query = queryString.stringify(params);
  return fetch('/api/media/search?'+query, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
  .then(handleErrors)
  .then(res=>res.json())
}

const searchHistory = (params) => {
 
  let query = queryString.stringify(params);
  return fetch('/api/media/history/search?'+query, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then(handleErrors)
  .then(res=>res.json())
}

export {
	getDirectUploadDetails,uploadVideo,
  create,

  listPopular,listByUser,listRelated,
  listHistoryMedia,listWatchlaterMedia,
  
  read,
  update,
  remove,
  like,dislike,
  searchMediaBy,searchHistory
}