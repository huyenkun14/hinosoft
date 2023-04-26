import React, { useEffect, useState, useContext } from 'react'
import './Login.css'
import { useNavigate, Link } from 'react-router-dom'
import axiosClient from '../../api/axiosClient'
import { userContext } from '../../store/UserProvider'

const Login = () => {

  const { login } = useContext(userContext)

  const navigate = useNavigate()

  const initialState = {
    username: '',
    password: ''
  }

  const [state, setState] = useState(initialState)
  const [isSubmit, setIsSubmit] = useState(false)
  const [errMsg, setErrMsg] = useState('')


  const handleInputChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSumbit = e => {
    e.preventDefault()
  }

  const handleLogin = () => {
    // const username = document.querySelector('#usernameLogin').value
    // const password = document.querySelector('#passwordLogin').value
    // console.warn(state)
    // const fetchAccounts = async () => {
    //   try {
    //     const url = '/auth/get_tokens'
    //     const account = await axiosClient.get(url, {
    //       params: {
    //         username,
    //         password,
    //         access_lifetime: 7200,
    //         refresh_lifetime: 7200
    //       }
    //     })
    //     console.log(account)
    //     localStorage.setItem('token', JSON.stringify(account.data.access_token))
    //     navigate('/home')
    //   } catch (e) {
    //     if (e) {
    //       setErrMsg('Kiểm tra lại thông tin đăng nhập!')
    //     } else {
    //       setErrMsg('Login failed!')
    //     }
    //   }
    // }
    // fetchAccounts()

    try {

      login()
      navigate("/home")
    } catch (e) {
      if (e) {
        setErrMsg('Kiểm tra lại thông tin đăng nhập!')
      } else {
        setErrMsg('Login failed!')
      }
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token'))
      setIsSubmit(true)
  })

  const renderLogin = (
    <div className='login d-flex'>
      <div className='col-1 col-sm-2 col-md-3 col-lg-3 col-xl-4'></div>

      <div className='login-inner col-10 col-sm-8 col-md-6 col-lg-6 col-xl-4'>
        <div className="login-logo">
          <img src='http://hinosoft.com/web/image/website/1/logo?unique=262762d' alt='' />
        </div>
        <p className={`errMsg ${!errMsg ? 'toggle' : ''}`}>* {errMsg}</p>

        <form onSubmit={handleSumbit}>
          <div className="login-ip d-flex flex-column flex-wrap">
            <div className='login-email placeholder-contain'>
              <i className="placeholder-icon fa-solid fa-user"></i>
              <input className='form-control' type="text" name='email' placeholder='Số điện thoại/Email' id='usernameLogin'
                onChange={handleInputChange}
              />
            </div>
            <div className='login-password placeholder-contain'>
              <i className="placeholder-icon fa-solid fa-lock"></i>
              <input className='form-control' type="password" name='password' placeholder={'Mật khẩu'} id='passwordLogin'
                onChange={handleInputChange}
              />
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
      {isSubmit ? navigate('/home') : renderLogin}
    </div>
  )
}
export default Login
