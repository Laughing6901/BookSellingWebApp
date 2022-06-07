import axiosClient from "./axios.client"

export const authApi = {
    login: (Email, Password) => {
        // console.log({Email})
        // console.log({Password})
        return axiosClient
            .post("signin", {
                Email,
                Password
            })
            .then((response) => {
                localStorage.setItem("user", JSON.stringify(response.accessToken))
                return response
            })
    }
}