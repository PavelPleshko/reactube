   import Cloudinary from 'cloudinary';
   import config from '../config/config';

   const cloudinaryConfig = config.cloudinary;


    const getResourceIdFromLink = (link,resourceType='image') => {
          const imagePostfix = 'jpg|jpeg|png';
          const videoPostfix = 'mp4|mpeg|avi|3gp';
          const postfix = resourceType === 'image' ? imagePostfix : videoPostfix;
          const regex = new RegExp(`(?:(upload.+))(?:\/)(.+)(?:\.(${postfix}))(\/)*$`, `gm`);
          let result = regex.exec(link);
          if(result){
            result = result.filter(item=>item && typeof item === 'string' &&
             !item.includes('/') && !postfix.includes(item));
             if(result){
              result = result[0];
              return result;
             }else{
              return false;
             }
          }     
        }

        const removeResourceFromCloudinary = async(resourcesArr,resourceType='image',config=cloudinaryConfig) => {
            const result = await Cloudinary.v2.api
                  .delete_resources(resourcesArr,{...config,resource_type:resourceType});
            return result;  
        }



        const uploadFileFromPathToCloudinary = (path,key,resourceType='image',previousPath) => {
          return new Promise((resolve,reject)=>{
            Cloudinary.v2.uploader.upload(path,cloudinaryConfig,async (err,result) => {
            if(err){
              reject(err);
            }
            if(result){
              if(previousPath){
          //TODO make it safer here with Regexp
                const previousId = getResourceIdFromLink(previousPath,resourceType);
            if(previousId){
                const cloudDelete = await removeResourceFromCloudinary([previousId],resourceType);          
            }     
              }
              resolve(result);
            }
        });
          });      
        };



        export {
          uploadFileFromPathToCloudinary,removeResourceFromCloudinary,getResourceIdFromLink
        }