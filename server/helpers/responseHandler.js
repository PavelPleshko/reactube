'use strict';
import {getErrorMessage} from './dbErrorHandler';

const throwError = (code, errorType, errorMessage) => error => {
  if (!error) error = new Error(errorMessage || 'Default Error')
  error.code = code
  error.errorType = errorType
  throw error
}

const throwIfNoResult = (fn, code, errorType, errorMessage) => result => {
  if (fn(result)) {
    return throwError(code, errorType, errorMessage)()
  }
  return result
}

const sendSuccess = (res, message) => data => {
  res.status(200).json({status:200, message, data})
}

const sendError = (res, status, message) => error => {
  let responseStatus;
  if(error && (error.code == 11000 || error.code == 11001)){
    let fieldName =   
      error.message.substring(error.message.lastIndexOf('.$') + 2,                                             
      error.message.lastIndexOf('_1'));
      message = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) +   
      ' already exists';
    responseStatus = 500;
  } else{
      responseStatus = status || error.code || 400;
  }
  res.status(responseStatus).json({
    status:responseStatus,
    message: message || error.message, 
    data:null
  })
}


export {
  throwError,throwIfNoResult,
  sendSuccess,sendError
}