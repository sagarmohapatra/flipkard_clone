import axios from "axios";
const URL = `http://localhost:8000`
export const authentication = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data)
    } catch (error) {
        console.log("error while calling signup api", error);
    }
}


export const authenticationLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log("error while calling login api", error);
        return error.response
    }
}

export const payUsingPaytm = async (data) => {
    try {
        const response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log("Error while calling payment api", error);
    }
}