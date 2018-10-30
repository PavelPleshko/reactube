

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

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];


function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${ minutes }`;
  }

  if (prefomattedDate) {
    return `${ prefomattedDate } at ${ hours }:${ minutes }`;
  }

  if (hideYear) {
    
    return `${ day } ${ month } at ${ hours }:${ minutes }`;
  }


  return `${ day } ${ month } ${ year }. at ${ hours }:${ minutes }`;
}

const fromNow = (dateParam)=>{
   if (!dateParam) {
    return null;
  }

  const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
  const DAY_IN_MS = 86400000; 
  const today = new Date();
  const yesterday = new Date(today - DAY_IN_MS);
  const seconds = Math.round((today - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const isToday = today.toDateString() === date.toDateString();
  const isYesterday = yesterday.toDateString() === date.toDateString();
  const isThisYear = today.getFullYear() === date.getFullYear();


  if (seconds < 5) {
    return 'now';
  } else if (seconds < 60) {
    return `${ seconds } seconds ago`;
  } else if (seconds < 90) {
    return 'about a minute ago';
  } else if (minutes < 60) {
    return `${ minutes } minutes ago`;
  } else if (isToday) {
    return getFormattedDate(date, 'Today'); 
  } else if (isYesterday) {
    return getFormattedDate(date, 'Yesterday'); 
  } else if (isThisYear) {
    return getFormattedDate(date, false, true); 
  }

  return getFormattedDate(date); 
}


export {
	transformSeconds,transformBytes,formatDuration,fromNow
}