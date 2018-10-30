const calculateAspectRatioFit = (srcWidth, srcHeight, maxWidth, maxHeight)=>{
	const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
	return { width: srcWidth*ratio, height: srcHeight*ratio };
}

const getImageNaturalDimensions = file => {
  return new Promise ((resolved, rejected)=>{
    const i = new Image();
    i.onload = function(){
      resolved({width: i.naturalWidth, height: i.naturalHeight})
    };
    i.src = file;
  })
}

const getCroppedImg = (image,origWidth,origHeight, pixelCrop, fileName) => {
  const canvas = document.createElement('canvas');
  const ratioX = image.width/origWidth;
  const ratioY = image.height/origHeight;
  canvas.width = pixelCrop.width * ratioX;
  canvas.height = pixelCrop.height* ratioY;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(
    image,
    pixelCrop.x * ratioX,
    pixelCrop.y * ratioY,
    pixelCrop.width * ratioX,
    pixelCrop.height * ratioY,
    0,
    0,
    pixelCrop.width * ratioX,
    pixelCrop.height * ratioY
  );
  return new Promise((resolve, reject) => {
    canvas.toBlob(file => {
      file.name = fileName;
      resolve(file);
    }, 'image/jpeg');
  });
}

export {
  calculateAspectRatioFit,getImageNaturalDimensions,getCroppedImg
}