import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './Login.css'
import PageNotFound from '../../component/pageNotFound/PageNotFound'
import { Link } from 'react-router-dom'
import { fetchLogin, getUserInfo } from '../../service/apiService'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../service/AuthProvider'
// import { useAuth } from '../../service/useAuth'

export const client = axios.create({
  baseURL: 'https://hinosoft.com/api',
});

export const UserContext = createContext()
const Login = () => {
  // const {login, user} = useAuth()
  const {login, userInfo } = useContext(AuthContext)
  const navigate = useNavigate()

  const initialState = {
    email: '',
    password: ''
  }

  const errors = {
    email_error: '* Số điện thoại/Email không chính xác',
    pass_error: '* Mật khẩu không chính xác'
  }

  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [errorMessages, setErrorMessages] = useState({})
  const [state, setState] = useState(initialState)
  const [userData, setData] = useState({})



  // const renderErrorMessage = name => {
  //   if (name === errorMessages.name)
  //     return <div className='error'><p>{errorMessages.message}</p></div>

  // }

  const handleInputChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSumbit = e => {
    e.preventDefault()
  }

  const handleLogin = e => {
    // let { email_error, pass_error } = document.forms[0]
    // const user = userData.find(data => data.email === email_error.value)

    // if (user) {
    //   if (user.password !== pass_error.value)
    //     setErrorMessages({ name: 'pass_error', message: errors.pass_error })
    //   else setIsSubmitted(true)
    // }
    // else setErrorMessages({ name: 'email_error', message: errors.email_error })
    // axios.post('https://hinosoft.com/api/auth/get_tokens?username=admin&password=admin&access_lifetime=7200&refresh_lifetime=7200')
    //   .then(function (response) {
    //     console.log(response.data)
    //     setData(response.data)
    //   })
    //   .catch(error => <PageNotFound />)




    // const username = document.querySelector('#username').value
    // const password = document.querySelector('#password').value
    // const params = `/auth/get_tokens?username=${username}&password=${password}&access_lifetime=7200&refresh_lifetime=7200`
    // return client
    // .get(params)
    // .then(res => {
    // if(res.data.data.access_token) {
      
    //     console.log(res.data.data.access_token)
    //     localStorage.setItem("accessToken", res.data.data.access_token);
    //     getUserInfo().then(res => {
    //       console.log(res.data.data.name)
    //       setData(res.data.data)
    //     })
    //     setIsSubmitted(true)
    // }
    // else {
    //     alert("Login fail")
    // }
    // })
    login()
    if(localStorage.getItem("accessToken")) {
      setIsSubmitted(true)
    }
  }


  const renderForm = (
    <div className='login d-flex'>
      <div className='col-1 col-sm-2 col-md-3 col-lg-3 col-xl-4'></div>

      <div className='login-inner col-10 col-sm-8 col-md-6 col-lg-6 col-xl-4'>
        <div className="login-logo">
          <img src='http://hinosoft.com/web/image/website/1/logo?unique=262762d' alt='' />
        </div>

        <form onSubmit={handleSumbit}>
          <div className="login-ip d-flex flex-column flex-wrap">
            <div className='login-email placeholder-contain'>
              <i className="placeholder-icon fa-solid fa-user"></i>
              <input className='form-control' type="text" name='email' placeholder='Số điện thoại/Email' id='username'
                onChange={handleInputChange}
              />
              {/* {renderErrorMessage('email_error')} */}
            </div>
            <div className='login-password placeholder-contain'>
              <i className="placeholder-icon fa-solid fa-lock"></i>
              <input className='form-control' type="password" name='password' placeholder={'Mật khẩu'} id='password'
                onChange={handleInputChange}
              />
              {/* {renderErrorMessage('pass_error')} */}

            </div>
          </div>
          <div className="login-check d-flex flex-row justify-content-between">
            <div>
              <input className='form-check-input' id='loginCheck' type="checkbox" name="remember" />
              <label className="form-check-label" htmlFor='loginCheck'>Nhớ mật khẩu</label>
            </div>
            <Link to='/forget'><p>Quên mật khẩu?</p></Link>
          </div>
          <button className='login-button btn btn-primary form-control' type='submit'
            onClick={handleLogin}
          >Đăng nhập</button>
        </form>

        <hr />

        <div className='no-login'>
          <p>Chưa có tài khoản?<Link to='/register'><span>Đăng ký</span></Link></p>

        </div>
      </div>

      <div className='col-1 col-sm-2 col-md-3 col-lg-3 col-xl-4'></div>
    </div>
  )

  return (
    <div>
      {isSubmitted ? navigate('/') : renderForm}
    </div>
  )
}
export default Login
