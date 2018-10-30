const createAction = (type,...argNames)=>{   
    return (...args)=>{
        let action = {type};
        argNames.forEach((argName,index)=>{
            action[argNames[index]] = args[index];
        })
        return action;
    }
}

export default createAction;