import * as C from "../store/constants";

export const loginFetch = async (email, password) => {
    const config = {
        method: 'POST',
        headers: C.headers,
        body: JSON.stringify({ email: email, password: password })
    };
    const response = await fetch(`${C.url}auth/token/`, config);
    return response;
};


export const preparePolygonData = (markings) => {
    const geoJSON = {
        "type":"FeatureCollection",
        "features": [
            {
                "type":"Feature",
                "properties":{},
                "geometry":{
                    "type":"Polygon",
                    "coordinates":[

                    ]
                }
            }
        ]
    };
    const dataToPrepare = markings.latlngs; // take an array of objects { lat: "", lng: ""}
    const arrayOfArrays = []
    dataToPrepare.forEach(marking => 
        arrayOfArrays.push([marking.lng, marking.lat]) // put in an array and flip the order and 
    );

    geoJSON.features[0].geometry.coordinates.push(arrayOfArrays)
    return geoJSON;
};


export const postCoordinates = async (mapMarkings) => {
    console.log('Post to: ', C.url)
    console.log('marked Polygon: ', mapMarkings)
    
    const geoJSON = preparePolygonData(mapMarkings);
    console.log('geoJSON from postCoordinates: ', geoJSON)
    const config = {
        method: "POST",
        headers: C.headersWithToken,
        body: JSON.stringify({ geoJSON }),
    };
    const response = await fetch(`${C.url}api/polygons/new/`, config);
    return response;
}
