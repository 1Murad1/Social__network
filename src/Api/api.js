import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "658670d8-78b3-4b51-8683-c3be078a8178"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const usersApi = {
    getUsers (currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId) {
        return instance.get(`profile/` + userId)
    }
}

export const authApi = {
    me () {
        return instance.get(`auth/me`)
    }
}

