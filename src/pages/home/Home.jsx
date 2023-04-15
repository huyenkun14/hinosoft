import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Header from '../../component/header/Header'
import AttendItem from '../../component/attendItem/AttendItem'
import QR from '../../component/scanQR/QR'
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from '../login/Login'
export const client = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://hinosoft.com/api',
});
const Home = (props) => {
  
  const userData = useContext(UserContext)
  console.log(userData)
  return (
    <div className='home'>
    <div className=''></div>
    {/* <QR /> */}
      <Header title='Trang chủ'/>
      <div className='home-inner d-flex flex-wrap'>
        <div className='col-md-1 col-lg-1 col-xl-1'></div>
        <div className='home-account col-12 col-md-3 col-lg-3 col-xl-3'>
          <div className='account-detail d-flex justify-content-center flex-column'>
            <div className='account-avt'>
              <img src='https://img.lovepik.com/free-png/20211204/lovepik-cartoon-avatar-png-image_401302777_wh1200.png' alt='' />
            </div>
            <div className='account-info'>
              <h4>John Wick</h4>
              <p>Lái xe</p>
            </div>
            <div className='account-contact'>
              <p><i class="fa-solid fa-location-dot"></i>&emsp;Quỳnh Phụ, Thái Bình</p>
              <p><i class="fa-solid fa-phone-flip"></i>&emsp;0904 966 113</p>
            </div>
          </div>
        </div>

        <div className='col-md-2 col-lg-2 col-xl-2'></div>

        <div className='col-12 col-md-5 col-lg-4 col-xl-4'>
          <div className='home-attend'>
            <AttendItem />
          </div>

          <div className="home-button d-flex justify-content-center">
            <Link to='/attendance'><button className='btn btn-primary'>Điểm danh</button></Link>
            <Link to='/maintenance'><button className='btn btn-secondary'>Bảo trì máy</button></Link>
          </div>
        </div>
        <div className='col-md-1 col-lg-2 col-xl-2'></div>

      </div>
    </div>
  )
}

export default Home
