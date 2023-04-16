import './AttendItem.css'

import React from 'react'

const AttendItem = () => {

  let isStart = true
  let isFinish = false

  return (
    <div className='attendItem d-flex justify-content-around'>

        <div className='attend-type'>
          <p><b>Xe lu 10 tấn</b></p>
          <div className='type-img'>
            <img src='https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/address-icon.png' alt='' />
          </div>
        </div>

        <div className='attend-start'>
          <p className='attend-title'>Bắt đầu</p>
          {
            isStart ? <div className='done'>
              <div className='start-time'>
                <span>2021-08-02</span>
                <p>09:30:00</p>
              </div>
              <p><b>1200 giờ</b></p>
            </div> : <div className='no-done'>
              <div className='start-time'>
                <span>2021-08-02</span>
                <p>09:30:00</p>
              </div>
              <p><b>---</b></p>
            </div>
          }
        </div>

        <div className='attend-arrow'>
          <i className="fa-solid fa-arrow-right"></i>
        </div>

        <div className='attend-end'>
          <p className='attend-title'>Kết thúc</p>
          {
            isFinish ? <div className='done'>
              <div className='end-time'>
                <span>2021-08-02</span>
                <p>09:30:00</p>
              </div>
              <p><b>1200 giờ</b></p>
            </div> : <div className='no-done'>
              <div className='end-time'>
                <p>Chưa</p>
                <br />
              </div>
              <p><b>---</b></p>
            </div>
          }
        </div>

    </div>
  )
}

export default AttendItem