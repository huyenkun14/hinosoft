import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
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
              <input className='form-control' type="text" placeholder='Số điện thoại/Email' />
            </div>
            <div className='register-name placeholder-contain'>
              <i class="placeholder-icon fa-solid fa-folder"></i>
              <input className='form-control' type="text" placeholder='Họ tên' />
            </div>
            <div className='register-password placeholder-contain'>
              <i class="placeholder-icon fa-solid fa-lock"></i>
              <input className='form-control' type="password" placeholder='Mật khẩu' />
            </div>
            <div className='register-confirm placeholder-contain'>
              <i class="placeholder-icon fa-regular fa-circle-check"></i>
              <input className='form-control' type="password" placeholder='Xác nhận mật khẩu' />
            </div>
          </div>
          <button className='register-button btn btn-primary form-control' type='submit'>Đăng ký</button>
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
