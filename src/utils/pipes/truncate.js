const truncate = (amount,str) => {
	  if (!amount) {
            return str;
        }else{
        	let lastIndex = /[\.\,\s\!\?]/i.exec(str.slice(amount));
        	return (str.length > amount) ? str.slice(0,amount+Number(lastIndex.index)) + '...' : str;
        }
}

const trimInTheMiddle = (str,fromLeft,fromRight,padding='...') => {
	if(str.length <= fromLeft+fromRight+padding.length) return str;
	let leftStr = str.slice(0,fromLeft);
	let rightStr = str.slice(-fromRight);
	let newStr = `${leftStr}${padding}${rightStr}`;
	return newStr;
}

export {
	truncate,trimInTheMiddle
}