import './Forget.css'
import React from 'react'

const Forget = () => {
    return (
        <div className='forget d-flex'>
            <div className='col-1 col-sm-2 col-md-3 col-lg-3 col-xl-4'></div>

            <div className='forget-inner col-10 col-sm-8 col-md-6 col-lg-6 col-xl-4'>
                <div className="forget-logo">
                    <img src='http://hinosoft.com/web/image/website/1/logo?unique=262762d' alt='' />
                </div>

                <div className='forget-title'>
                    <p>Vui lòng nhập địa chỉ Email để chúng tôi gửi link thiết lập mật khẩu cho bạn.</p>
                </div>

                <form action="">

                    <div className='forget-email placeholder-contain'>
                    <i class="placeholder-icon fa-solid fa-user"></i>
                        <input className='form-control' type="email" placeholder='Email'/>
                        <div className='display email-alert'><p> * Email không chính xác</p></div>
                    </div>
                    <button className='forget-button btn btn-primary form-control' type='submit'>Gửi</button>
                </form>

            </div>

            <div className='col-1 col-sm-2 col-md-3 col-lg-3 col-xl-4'></div>
        </div>
    )
}

export default Forget