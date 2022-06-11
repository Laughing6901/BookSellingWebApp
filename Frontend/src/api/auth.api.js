import axiosClient from "./axios.client"

export const authApi = {
    login: (Email, Password) => {
        return axiosClient
            .post("signin", {
                Email,
                Password
            })
            .then((response) => {
                localStorage.setItem("user", JSON.stringify(response.accessToken))
                return response
            })
    },
    logout: () => {
        localStorage.removeItem("user")
    },
    register: (FirstName, LastName, Email, Password) => {
        return axiosClient
        .post('signup', {
            FirstName,
            LastName,
            Email,
            Password
        })
        .then((response) => {
            return response
        })
    }
}