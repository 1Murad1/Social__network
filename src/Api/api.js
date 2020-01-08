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
        console.warn("Obsolete method. Please profileApi object.")
        return profileApi.getProfile(userId);
    }
}

export const profileApi = {
    getProfile (userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId) {
        return instance.get("profile/status/" + userId)
    },
    updateStatus (status) {
        return instance.put ("profile/status", {status: status})
    },
    savePhoto (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put ("profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile (profile) {
        return instance.put ("profile", profile)
    }
}



export const authApi = {
    me () {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe = false) {
        return instance.post("auth/login", {email, password, rememberMe})
    },
    logout () {
        return instance.delete("auth/login")
    }
}

