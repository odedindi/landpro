
export const SET_ACTIVE_OPTION = 'SET_ACTIVE_OPTION'; 


export const headers = new Headers({ 'Content-Type': 'application/json' });
export const headersWithToken = new Headers({ 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ localStorage.getItem('token') }`
});
// const localUrl = 'http://0.0.0.0:8000/'
const serverUrl = 'http://0.0.0.0:8000/';
export const url = process.env.NODE_ENV === 'development' ? localUrl : serverUrl;
