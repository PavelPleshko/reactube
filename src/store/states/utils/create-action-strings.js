const SUCCESS = 'SUCCESS';
const REQUEST = 'REQUEST';
const ERROR = 'ERROR';
const defaultApiIssuer = 'Api response';
const defaultRequestIssuer = 'default';
const defaultApiIssuersObj = {};
const separator = '_';

const createActionStrings = (actionBaseName,requestIssuer=defaultRequestIssuer,ApiIssuers=defaultApiIssuersObj) => {
	const suffixes = {
		request:{stringName:REQUEST,isssuer:requestIssuer},
		success:{stringName:SUCCESS,isssuer:ApiIssuers.success || defaultApiIssuer},
		error:{stringName:ERROR,isssuer:ApiIssuers.error || defaultApiIssuer}
	};
	
	const result = {};
	for(const suffix in suffixes){
		const suffixString = suffixes[suffix].stringName;
		const actionIssuer = suffixes[suffix].isssuer;
		result[`${actionBaseName}${separator}${suffixString}`] = 
			`${actionIssuer}/${actionBaseName}${separator}${suffixString}`
	}
	return result;
};

export default createActionStrings;