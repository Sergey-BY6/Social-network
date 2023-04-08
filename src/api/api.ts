import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '313ded19-330d-429f-a6f0-8b2872a8253d'
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})



export const usersAPI = {
    // getUsers(currentPage: number = 1, pageSize: number = 10) {
    //     return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
    //         .then(response => {
    //             return response.data
    //         })
    // },
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
        console.warn("Obsolete method. Please profileAPI object")
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
}




export const authAPI = {
    me () {
       return instance.get(`auth/me`)
    },
    login (email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}