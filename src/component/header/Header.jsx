import './Header.css'
import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <ul className="d-flex justify-content-around">
        <li><Link to='/'>Trang chủ</Link></li>
        <li><Link to='/attendance'>Điểm danh</Link></li>
        <li><Link to='/maintenance'>Bảo trì máy</Link></li>
        <li><Link to='/attendance_history'>Lịch sử điểm danh</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li>Đăng xuất</li>
      </ul>
    </div>
  )
}

export default Header