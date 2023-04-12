import Header from '../../component/header/Header'
import './Attendance.css'
import React, { useState } from 'react'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Attendance = () => {

  const [date, setDate] = useState(new Date())

  const onChange = date => {
    setDate(date)
  }

  return (
    <div className='attendance'>
      <Header />
      <div className='d-flex'>
        <div className='col-1 col-sm-2 col-md-3 col-lg-3 col-xl-4'></div>

        <div className='attendance-inner col-10 col-sm-8 col-md-6 col-lg-6 col-xl-4'>

          <h1>Điểm danh</h1>
          <div className='attend-type'>
            <h5>Xe lu 10 tấn - MAY10T</h5>
          </div>
          <div className='attend-detail'>
            <div className='attend-calendar'>
              <input type='text' className='' value={date.toString()}/>
              <div className='calendar'>
                <Calendar onChange={onChange} value={date} />
                {date.toString()}
              </div>
              
            </div>
            <form>
              <div className='attend-time mb-3 d-flex'>
                <label htmlFor='time'>Số giờ máy bắt đầu: </label>
                <input id='time' type='text' autoFocus />
              </div>
              <div className='attend-local'>
                <label>Vị trí: </label>
                <select>
                  <option>Vị trí A</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        <div className='col-1 col-sm-2 col-md-3 col-lg-3 col-xl-4'></div>
      </div>
    </div>
  )
}

export default Attendance