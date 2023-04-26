import React, { createContext, useEffect, useState, useRef } from "react";
import axiosClient from "../api/axiosClient";
import axios from "axios";
import {fetchAccounts,  } from "../service/apiService";
// import { useNavigate } from "react-router-dom";
export const userContext = createContext({})

const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState({})
    // const navigate = useNavigate()
    const fetchUserInfo = async () => {
        let accessToken = localStorage.getItem("token");
        const url = '/profile_info'
        const userInfo = axios.create({
            baseURL: 'https://hinosoft.com/api',
            headers: { access_token: accessToken }
        })
        await userInfo.get(url)
            .then(userInfo => {
                console.log(userInfo.data.data)
                setUserData(userInfo.data.data)
            })
            .catch(e => console.log(e))
        console.log(accessToken)
    }
    const login = async () => {
        await fetchAccounts()
        fetchUserInfo()
    //  .then(res => {
    //     setUserData(res.data.data)
    // })
    }
    return (
        <userContext.Provider value={{ userData, login }}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider
