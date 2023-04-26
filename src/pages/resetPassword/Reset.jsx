import { useNavigate } from 'react-router-dom'
import './Reset.css'

import React, { useState } from 'react'

const Reset = () => {

    const initialState = {
        password: '',
        rePassword: ''
    }

    const [state, setState] = useState(initialState)

    const handleInputChange = e => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const handleSumbit = e => {
        e.preventDefault()
    }

    const navigate = useNavigate()

    return (
        <div className='forget d-flex'>
            <div className='col-1 col-sm-2 col-md-3 col-lg-3 col-xl-4'></div>

            <div className='forget-inner col-10 col-sm-8 col-md-6 col-lg-6 col-xl-4'>
                <div className="forget-logo">
                    <img src='http://hinosoft.com/web/image/website/1/logo?unique=262762d' alt='' />
                </div>

                <div className='forget-title mb-6'>
                    <p>Vui lòng nhập mật khẩu mới.</p>
                </div>

                <form onSubmit={handleSumbit} action="">
                    <div className='forget-email placeholder-contain'>
                        <i className="placeholder-icon fa-solid fa-lock"></i>
                        <input className='form-control' type="email" placeholder='Mật khẩu'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='forget-email placeholder-contain'>
                        <i className="placeholder-icon fa-regular fa-circle-check"></i>
                        <input className='form-control' type="email" placeholder='Xác nhận mật khẩu'
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className='forget-button btn btn-primary form-control' type='submit'
                        onClick={() => navigate('/login')}
                    >Hoàn thành</button>
                </form>

            </div>

            <div className='col-1 col-sm-2 col-md-3 col-lg-3 col-xl-4'></div>
        </div>
    )
}

export default Reset