import axiosClient from "./axiosClient"


const attendanceApi = {
    get(url) {
        return axiosClient.get(url)
    },

    add(url, data) {
        return axiosClient.post(url, data)
    },

    update(url, data) {
        return axiosClient.get(url, data)
    },
}

export default attendanceApi