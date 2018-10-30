const workercode = ()=>{
	self.onmessage = (message) => {	
	const func = self.getFunc(message.data.action);
	const args = message.data.args;
	const result = func.apply(null,args);
	postMessage(result);
}

self.getFunc = function (funcStr) {
	var argName = funcStr.substring(funcStr.indexOf("(") + 1, funcStr.indexOf(")"));
	funcStr = funcStr.substring(funcStr.indexOf("{") + 1, funcStr.lastIndexOf("}"));
	return new Function(argName, funcStr);
};
}

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

export default worker_script;