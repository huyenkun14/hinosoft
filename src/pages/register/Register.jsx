import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { fetchRegister } from '../../service/apiService'
const Register = () => {
  const [login, setLogin] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const handleRegister = () => {
      const navigate = useNavigate()
      if (login === '' || name === "" || password === "" || confirmPass === "" ) {
        alert("Hãy điền đủ các thông tin")
      }
      else {
        if (password !== confirmPass) {
          alert("Điền lại mật khẩu không chính xác")
        }
        else {
          fetchRegister({login, name, password})
          .then (res => {
            if (res.data.success === true) {
              alert("Đăng kí thành công")
              navigate("/login")
            }
            else {alert("Kiểm tra lại các thông tin")}
          })
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

        <form action="">
          <div className="register-ip d-flex flex-column flex-wrap">
            <div className='register-contact placeholder-contain'>
              <i class="placeholder-icon fa-solid fa-user"></i>
              <input className='form-control' type="text" placeholder='Số điện thoại/Email' 
                value={login}
                onChange={e => setLogin(e.target.value)}
              />
            </div>
            <div className='register-name placeholder-contain'>
              <i class="placeholder-icon fa-solid fa-folder"></i>
              <input className='form-control' type="text" placeholder='Họ tên' 
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className='register-password placeholder-contain'>
              <i class="placeholder-icon fa-solid fa-lock"></i>
              <input className='form-control' type="password" placeholder='Mật khẩu' 
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className='register-confirm placeholder-contain'>
              <i class="placeholder-icon fa-regular fa-circle-check"></i>
              <input className='form-control' type="password" placeholder='Xác nhận mật khẩu'
                value={confirmPass}
                onChange={e => setConfirmPass(e.target.value)}             
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
