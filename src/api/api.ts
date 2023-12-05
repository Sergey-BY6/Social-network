import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '313ded19-330d-429f-a6f0-8b2872a8253d'
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})



export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(elId: number) {
        return instance.post(`follow/${elId}`)
            .then(response => response.data)
    },
    unFollow(elId: number) {
        return instance.delete(`follow/${elId}`)
            .then(response => response.data)
    },
    getProfile (userId: string) {
        return  profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile (userId: string) {
        return  instance.get(`profile/` + userId)
    },
    getStatus (userId: string) {
        return  instance.get(`profile/status/` + userId)
    },
    updateStatus (status: string) {
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto (photoFile: File) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
}

export const authAPI = {
    me () {
       return instance.get(`auth/me`)
    },
    login (email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get(`security/get-captcha-url`)
    }
}