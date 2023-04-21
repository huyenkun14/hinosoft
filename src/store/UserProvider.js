import React, { createContext, useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import axios from "axios";


export const userContext = createContext({})

const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState({})


    const fetchUserInfo = async () => {
        let accessToken = localStorage.getItem("token");
        const url = '/profile_info'
        const userInfo = axios.create({
            baseURL: 'https://hinosoft.com/api',
            headers: { accessToken }
        })
        await userInfo.get(url)
            .then(userInfo => {
                console.log(userInfo.data)
                setUserData(userInfo.data)
            })
            .catch(e => console.log(e))
        console.log(accessToken)
    }
    fetchUserInfo()

    return (
        <userContext.Provider value={{ userData }}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider
