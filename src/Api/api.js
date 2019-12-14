import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "c803138c-a883-4488-8450-6ec13fd99203"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const usersApi = {
    getUsers (currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
    }
}

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}