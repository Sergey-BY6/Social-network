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
        return  instance.get(`profile/` + userId)

    }
}




export const authAPI = {
    me () {
       return instance.get(`auth/me`)
    },
}