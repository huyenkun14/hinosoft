// // useAuth.js
// // import { AuthProvider } from "AuthProvider";
// import { AuthContext } from "./AuthProvider";
// import { useContext } from "react";
// import { getUserInfo } from "./apiService";
// import axios from "axios";
// export const client = axios.create({
//     baseURL: 'https://cors-anywhere.herokuapp.com/https://hinosoft.com/api',
//   });
// export const useAuth = () => {
//     const { state, dispatch } = useContext(AuthContext);
//     const login = () => {
//         const username = document.querySelector('#username').value
//         const password = document.querySelector('#password').value
//         const params = `/auth/get_tokens?username=${username}&password=${password}&access_lifetime=7200&refresh_lifetime=7200`
//         return client
//         .get(params)
//         .then(res => {
//         if(res.data.data.access_token) {
//             console.log(res.data.data.access_token)
//             localStorage.setItem("accessToken", res.data.data.access_token);
//             getUserInfo().then(res => {
//             console.log(res.data.data.name)
//             dispatch({type: "login", payload: res.data.data})
//             })
//             // setIsSubmitted(true)
//         }
//         else {
//             alert("Login fail")
//         }
//         })
//     }
//     const logout = () => {
//         dispatch({ type: "logout" })
//     }
//     return {
//         user: state.user,
//         login,
//         logout,
//     }
// }