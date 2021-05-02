import { headers, headersWithToken, localUrl } from "../store/constants";

export const loginFetch = async (email, password) => {
    const config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ email: email, password: password })
    };
    const response = await fetch(`${localUrl}auth/token/`, config);
    return response;
};


export const postCoordinates = async (mapMarkings) => {
    const config = {
        method: "POST",
        headers: headersWithToken,
        body: JSON.stringify({ "coordinates": mapMarkings[0] }),
    };
    const response = await fetch(`${localUrl}api/polygons/new/`, config);
    return response;
}