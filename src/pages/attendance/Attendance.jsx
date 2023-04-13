import Header from '../../component/header/Header'
import './Attendance.css'
import React, { useState } from 'react'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Attendance = () => {

  const [date, setDate] = useState(new Date())
  const [calendar, setCalender] = useState(false)

  const onChange = date => {
    setDate(date)
  }

  return (


    <div className='attendance'>
      <Header title='Điểm danh' />
      <div className='d-flex'>
        <div className='col-sm-2 col-md-2 col-lg-3 col-xl-3'></div>
        <div className='col-12 col-sm-8 col-md-8 col-lg-6 col-xl-6'>

          <div className='attend-type'>
            <h5>Xe lu 10 tấn - MAY10T</h5>
          </div>
          <div className='attend-detail'>
            <div className='attend-calendar'>
              <div className='calendar-display'>
                <i class="fa-solid fa-calendar-days"></i>
                <input type='text' className='' value={date.toLocaleDateString()} onClick={() => setCalender(!calendar)} />
              </div>
           
              <div className={calendar ? calendar : 'toggle'} style={{marginTop: 10}}>
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

          <div className='save-button'>
            <button type="button" className="btn btn-primary">Lưu</button>         
          </div>

          </div>
        </div>
        <div className='col-sm-2 col-md-2 col-lg-3 col-xl-3'></div>
      </div>
    </div>
  )
}

export default Attendance