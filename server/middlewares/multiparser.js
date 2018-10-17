import extend from 'lodash/extend';
import formidable from 'formidable';

const MultiParser = () =>{
  return (req,res,next)=>{
   const form = new formidable.IncomingForm();
   form.parse(req, (err, fields, files) =>{
    if (err)
      next(err);
    else {
      req.body = extend(req.body,fields);
      req.files = files;
      next();
    }
  });
  }
  
}

export default MultiParser;
