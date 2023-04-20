// AuthProvider.js
// authReducer.js
import { useContext } from "react";
import { getUserInfo } from "./apiService";
import axios from "axios";
import React, { useState } from 'react';
import { useReducer } from "react";
import { createContext } from "react";
const client = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://hinosoft.com/api',
  });
export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState()
    const login = () => {
        const username = document.querySelector('#username').value
        const password = document.querySelector('#password').value
        const params = `/auth/get_tokens?username=${username}&password=${password}&access_lifetime=7200&refresh_lifetime=7200`
        return client
        .get(params)
        .then(res => {
        if(res.data.data.access_token) {
            console.log(res.data.data.access_token)
            localStorage.setItem("accessToken", res.data.data.access_token);
            getUserInfo().then(res => {
                console.log(res.data.data.name)
                setUserInfo(res.data.data)
            })
        }
        else {
            alert("Login fail")
        }
        })
    }
  return (
    <AuthContext.Provider value={{userInfo, login}}>
      {children}
    </AuthContext.Provider>
  );
};