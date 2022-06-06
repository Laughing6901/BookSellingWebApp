import axios from "axios";

const API_URL = "http://localhost:8600/";

export const login = (username, password) => {
    return axios
    .post(API_URL + "signin", {
        username,
        password
    })
    .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data))
        return response.data
    })
}

export const authService = {login}
