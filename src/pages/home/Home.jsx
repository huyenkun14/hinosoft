import React from 'react'
import './Home.css'
import { Link, Outlet } from 'react-router-dom'
import Header from '../../component/header/Header'
import AttendItem from '../../component/attendItem/AttendItem'

const Home = () => {
  return (
    <div className='home d-flex flex-column justify-content-center'>
      <Header />

      <div className='home-account'>
        <div className='account-avt'>
          <img src='https://img.lovepik.com/free-png/20211204/lovepik-cartoon-avatar-png-image_401302777_wh1200.png' alt='' />
        </div>
        <div className='account-info'>
          <h4>John Lee</h4>
          <p>Lái xe</p>
        </div>
        <div className='account-contact'>
          <p><i class="fa-solid fa-location-dot"></i>&emsp;Quỳnh Phụ, Thái Bình</p>
          <p><i class="fa-solid fa-phone-flip"></i>&emsp;0904 966 113</p>
        </div>
      </div>

      <div className='home-attend'>
        <AttendItem />
      </div>

      <div className="home-button d-flex justify-content-center">
        <Link to='/attendance'><button className='btn btn-primary'>Điểm danh</button></Link>
        <Link to='/maintenance'><button className='btn btn-secondary'>Bảo trì máy</button></Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Home
