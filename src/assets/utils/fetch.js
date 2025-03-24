
/*
 * Khattit App v1.0.0
 * This Code is written By Khattit Team
 * All Rights are reserved to Khattit App
*/

// Load VUE_APP_ENDPOINT variable that's related to WebPack V5
const API_ENDPOINT = "http://localhost:3000/api/v1"

// AuthHeader Auth
 const AuthHeader = () => {
    const token = localStorage.getItem('token')
    if (token) {
        return { 
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    } else {
        return { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
    }
}

// Fetch method
export const Fetch = async (method, route, data = null) => {
    const requestOptions = {
        method: method,
        headers: AuthHeader(),
        mode: 'cors'
    };
    if(method !== "GET") {
        requestOptions.body = JSON.stringify(data); 
    }
    const response = await fetch(`${API_ENDPOINT}${route}`, requestOptions);
    const response_data = await response.json();
    return response_data;
}

 