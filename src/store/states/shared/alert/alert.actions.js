
export const ALERT_SUCCESS = 'ALERT_SUCCESS'; 
export function alertSuccess(message) {
    return { type: ALERT_SUCCESS,message };
}
 
export const ALERT_ERROR = 'ALERT_ERROR';
export function alertError(message) {
    return { type: ALERT_ERROR, message };
}
 
export const ALERT_CLEAR = 'ALERT_CLEAR';
export function alertClear() {
    return { type: ALERT_CLEAR };
}

