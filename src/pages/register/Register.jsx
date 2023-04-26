import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import axiosClient from '../../api/axiosClient'
import axios from 'axios'

const Register = () => {

  const initialState = {
    fullname: '',
    username: '',
    password: '',
    rePassword: ''
  }

  const [state, setState] = useState(initialState)
  const [errMsg, setErrMsg] = useState('')

  const handleInputChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSumbit = e => {
    e.preventDefault()
  }

  const navigate = useNavigate()
  const handleRegister = () => {
    const username = document.querySelector('#usernameRegister').value
    const password = document.querySelector('#passwordRegister').value

    if (state.fullname === '' || state.username === "" || state.password === "" || state.rePassword === "") {
      setErrMsg('Vui lòng điền đầy đủ thông tin!')
    }
    else {
      if (password !== state.rePassword) {
        setErrMsg("Xác nhận lại mật khẩu!")
      }
      else {
        const fetchRegister = async () => {
          const url = '/res.users'
          const bodyData = {
            name: state.fullname,
                login: state.username,
                password
          }
          const account = axios.create({

          })
          await account.post(
            url,
            {
              username,
              password
            },
            {
              body: {
                name: state.fullname,
                login: state.username,
                password
              }
            })
            .then((account) => {
              console.log(account)
              navigate('/login')
              alert('Bạn đã đăng ký thành công. Vui lòng đăng nhập lại.')
            })
            .catch((e) => {
              setErrMsg('Kiểm tra lại thông tin đăng kí!')
              console.log(e);
            });
          console.log(account)
        }
        fetchRegister()
      }
    }
  }

  return (
    <div className='register d-flex'>
      <div className='col-1 col-sm-2 col-md-3 col-lg-3 col-xl-4'></div>

      <div className='register-inner col-10 col-sm-8 col-md-6 col-lg-6 col-xl-4'>
        <div className="register-logo">
          <img src='http://hinosoft.com/web/image/website/1/logo?unique=262762d' alt='' />
        </div>
        <p className={`errMsg ${!errMsg ? 'toggle' : ''}`}>* {errMsg}</p>

        <form onSubmit={handleSumbit} action="">
          <div className="register-ip d-flex flex-column flex-wrap">
            <div className='register-contact placeholder-contain'>
              <i className="placeholder-icon fa-solid fa-user"></i>
              <input className='form-control' type="text" name='username' placeholder='Số điện thoại/Email' id='usernameRegister'
                onChange={handleInputChange}
              />
            </div>
            <div className='register-name placeholder-contain'>
              <i className="placeholder-icon fa-solid fa-folder"></i>
              <input className='form-control' type="text" name='fullname' placeholder='Họ tên'
                onChange={handleInputChange}
              />
            </div>
            <div className='register-password placeholder-contain'>
              <i className="placeholder-icon fa-solid fa-lock"></i>
              <input className='form-control' type="password" name='password' placeholder='Mật khẩu' id='passwordRegister'
                onChange={handleInputChange}
              />
            </div>
            <div className='register-confirm placeholder-contain'>
              <i className="placeholder-icon fa-regular fa-circle-check"></i>
              <input className='form-control' type="password" name='rePassword' placeholder='Xác nhận mật khẩu'
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button className='register-button btn btn-primary form-control' type='submit'
            onClick={handleRegister}
          >Đăng ký</button>
        </form>

        <hr />

        <div className='no-register'>
          <p>Đã có tài khoản?<Link to='/login'><span>Đăng nhập</span></Link></p>

        </div>
      </div>

      <div className='col-1 col-sm-2 col-md-3 col-lg-3 col-xl-4'></div>
    </div>
  )
}

export default Register
