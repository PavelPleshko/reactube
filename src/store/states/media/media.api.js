


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

const getDirectUploadDetails = (resourceType) => {
	return fetch('/api/media/upload_link',{
		method:'POST',
		headers:{
			'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
     credentials: 'include',
     body: JSON.stringify(resourceType)
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
              reject('Uploading failed due to technical reasons. Please contact support.');
            }
            }
          } 
            xhr.send(options);           
          })

}


const create = (mediaBody)=>{
  return fetch('/api/media/new',{
    method:'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     credentials: 'include',
     body: JSON.stringify(mediaBody)
  })
  .then(handleErrors)
  .then(res=>res.json())
}


const listPopular = () => {
  return fetch('/api/media/popular', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(handleErrors)
  .then(res=>res.json())
}

const listRelated = (params) => {
  return fetch('/api/media/related/'+ params.mediaId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }) 
  .then(handleErrors)
  .then(res=>res.json())
}

const listByUser = (params) => {
  return fetch('/api/media/by/'+ params.userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(handleErrors)
  .then(res=>res.json())
}


const read = (params) => {
  return fetch('/api/media/' + params.mediaId, {
    method: 'GET'
  })
  .then(handleErrors)
  .then(res=>res.json())
}


const update = (media,params) => {
  return fetch('/api/media/' + params.mediaId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(media)
  })
  .then(handleErrors)
  .then(res=>res.json())
}

const remove = (params) => {
  return fetch('/api/media/' + params.mediaId, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
  .then(handleErrors)
  .then(res=>res.json())
}

export {
	getDirectUploadDetails,uploadVideo,
  create,
  listPopular,listByUser,listRelated,
  read,
  update,
  remove
}