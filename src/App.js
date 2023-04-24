
import React from 'react';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Attendance from './pages/attendance/Attendance'
import History from './pages/attendance_history/History'
import Maintenance from './pages/maintenance/Maintenance'
import AttendanceDetail from './pages/attendance_detail/AttendanceDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forget from './pages/forget/Forget';
import Reset from './pages/resetPassword/Reset'
import Guide from './pages/guide/Guide'
import QR from './pages/scanQR/QR';
import Reason from './pages/reason/Reason'
import PageNotFound from './pages/pageNotFound/PageNotFound';
import UserProvider from './store/UserProvider'
function App() {
  return (
    <UserProvider>
    <div className='app'>
      <div className='cover-bg'></div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='forget' element={<Forget />} />
          <Route path='reset' element={<Reset />} />
          <Route path='register' element={<Register />} />
          <Route path='scan' element={<QR />} />
          <Route path='attendance' element={<Attendance />} />
          <Route path='attendance_history' element={<History />} />
          <Route path='attendance_detail' element={<AttendanceDetail />} />
          <Route path='maintenance' element={<Maintenance />} />
          <Route path='guide' element={<Guide />} />
          <Route path='reason' element={<Reason />} />
          <Route path='pagenotfound' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
    </UserProvider>
  );
}

export default App;
