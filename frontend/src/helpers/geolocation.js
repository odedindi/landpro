export const getGeoLocation = () => {

    let status = ''; 

    const success = (position) => {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;


        status = { lat: latitude, lon: longitude };
        return status;
    }
  
    const error = () => {
        status = 'Unable to retrieve your location';
        return status; 
    }
  
    if(!navigator.geolocation) {
        status = 'Geolocation is not supported by your browser';
        return status; 
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
  
}
