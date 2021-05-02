
export const SET_ACTIVE_OPTION = 'SET_ACTIVE_OPTION'; 


export const headers = new Headers({ 'Content-Type': 'application/json' });
export const headersWithToken = new Headers({ 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ localStorage.getItem('token') }`
});
export const localUrl = 'http://0.0.0.0:8000/'
export const serverUrl = '';