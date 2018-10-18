   import Cloudinary from 'cloudinary';
   import config from '../config/config';


        const uploadFileFromPathToCloudinary = (path,key,resourceType='image',previousPath) => {
          return new Promise((resolve,reject)=>{
            Cloudinary.v2.uploader.upload(path,config.cloudinary,async (err,result) => {
            if(err){
              reject(err);
            }
            if(result){
              if(previousPath){
          //TODO make it safer here with Regexp
                let previousId = /(?:(upload.+))(?:\/)(.+)(?:\.(jpg|jpeg|png))$/gm.exec(previousPath)[2];
            if(previousId){
                    let cloudDelete = await Cloudinary.v2.api
                .delete_resources([previousId],{...config.cloudinary,resource_type:resourceType});                
            }     
              }
              resolve(result);
            }
        });
          });      
        };

        export {
          uploadFileFromPathToCloudinary
        }