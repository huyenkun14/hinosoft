import axiosClient from "./axiosClient"

const accountApi = {
    get(params) {
        const url = '/auth/get_tokens'
        return axiosClient.get(url, { params })
    },

    add(data) {
        const url = '/res.users'
        return axiosClient.post(url, data)
    },
}

export default accountApi