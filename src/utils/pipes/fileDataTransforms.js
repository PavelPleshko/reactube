const transformSeconds=(value)=>{
		let display = '';
	    let h = Math.floor(value / 3600);
	    let m = Math.floor(value % 3600 / 60);
	    let s = Math.floor(value % 3600 % 60);
	    display = h>0 ? h+'h ' : '';
	    display += m>0 ? m+'min ' :'';
	    display += s>0 ? s+'s': '';
	    return display;
	}

const transformBytes = (bytes)=>{
   let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}


const formatDuration = (seconds) => {
  const date = new Date(Number(seconds) * 1000)
  const hh = date.getUTCHours()
  let mm = date.getUTCMinutes()
  const ss = ('0' + date.getUTCSeconds()).slice(-2)
  if (hh) {
    mm = ('0' + date.getUTCMinutes()).slice(-2) 
    return `${hh}:${mm}:${ss}`
  }
  return `${mm}:${ss}`
}


export {
	transformSeconds,transformBytes,formatDuration
}