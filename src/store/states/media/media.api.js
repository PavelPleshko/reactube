import {getToken} from '../../helpers/localStorage';


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




export {
	getDirectUploadDetails,uploadVideo
}