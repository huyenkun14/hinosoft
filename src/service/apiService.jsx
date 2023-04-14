
// import axios from "axios";
// import axiosJsonp from 'axios-jsonp';
// export const client = axios.create({
//     baseURL: 'https://cors-anywhere.herokuapp.com/https://hinosoft.com/api',
//   });

// export let accessToken = ''
// export const fetchLogin = () => {
//     const params = "/auth/get_tokens?username=admin&password=admin&access_lifetime=7200&refresh_lifetime=7200" 
//     return client
//     .get(params)
//     .then(res => {
//         accessToken = res.data.data.access_token
//         console.log( res.data.data.access_token)
//     })
//  }

//  export const getListLogin = () => {
//     const params = '/attendence'
//     return client
//     .get(params, {
//         headers: {
//             access_token: accessToken
//         }
//     })
//     .then(res => {
//         console.log(res.body)
//     })
//  }
 