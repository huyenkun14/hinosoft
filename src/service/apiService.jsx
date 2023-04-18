import axios from "axios";

export const client = axios.create({
    baseURL: 'https://hinosoft.com/api',
  });

// export const fetchLogin = () => {
//     const username = document.querySelector('#username').value
//     const password = document.querySelector('#password').value
//     const params = `/auth/get_tokens?username=${username}&password=${password}&access_lifetime=7200&refresh_lifetime=7200`
//     return client
//     .get(params)
//     .then(res => {
//     if(res.data.data.access_token) {
//         console.log(res.data.data.access_token)
//         localStorage.setItem("accessToken", res.data.data.access_token);
//         // window.location.href = "http://localhost:3000/";
//     }
//     else {
//         alert("Login fail")
//     }
//     })
//  }
//  console.log(accessToken)
export const getUserInfo = () => {
  let accessToken = localStorage.getItem("accessToken");
  console.log(accessToken);
  const params = "/profile_info";
  return client.get(params, {
    headers: {
      "Content-Type": "application/json",
      access_token: accessToken,
    },
  });
  // .then(res => {
  //     console.log(res.body)
  // })
};
export const fetchAttendanceList = () => {
  let accessToken = localStorage.getItem("accessToken");
  console.log(accessToken);
  const params = "/attendence";
  return client.get(params, {
    headers: {
      "Content-Type": "application/json",
      access_token: accessToken,
    },
  });
};

export const fetchRegister = (data) => {
    const {name, login, password} = data
  let accessToken = localStorage.getItem("accessToken");
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
