import axios from "axios";
import axiosClient from "../api/axiosClient";
export const client = axios.create({
    baseURL: 'https://hinosoft.com/api',
  });

export const fetchAccounts = async () => {
  const username = document.querySelector('#usernameLogin').value
  const password = document.querySelector('#passwordLogin').value
      const url = '/auth/get_tokens'
      const account = await axiosClient.get(url, {
        params: {
          username,
          password,
          access_lifetime: 7200,
          refresh_lifetime: 7200,
        }
      })
      console.log(account)
      localStorage.setItem('token', account.data.access_token)
      
  }
// export const fetchUserInfo = () => {
//   let accessToken = localStorage.getItem("token");
//   console.log(accessToken);
//   const params = "/profile_info";
//   return client.get(params, {
//     headers: {
//       "Content-Type": "application/json",
//       access_token: accessToken,
//     },
//   });
// };
export const fetchAttendanceList = async () => {
  let accessToken = localStorage.getItem("token");
  console.log(accessToken);
  const params = "/attendence";
  return await client.get(params, {
    headers: {
      "Content-Type": "application/json",
      access_token: accessToken,
    },
  });
};

export const fetchRegister = (data) => {
    const {name, login, password} = data
  let accessToken = localStorage.getItem("token");
  const params = "/res.users";
  return client.post(
    params,
    {
      headers: {
        "Content-Type": "application/json",
        access_token: accessToken,
      },
    },
    {name, login, password}
  );
};