const truncate = (amount,str) => {
	  if (!amount) {
            return str;
        }else{
        	let lastIndex = /[\.\,\s\!\?]/i.exec(str.slice(amount));
        	return (str.length > amount) ? str.slice(0,amount+Number(lastIndex.index)) + '...' : str;
        }
}


export {
	truncate
}