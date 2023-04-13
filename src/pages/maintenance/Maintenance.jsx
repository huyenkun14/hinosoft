import Header from '../../component/header/Header'
import './Maintenance.css'
import React from 'react'

const Maintenance = () => {
  return (
    <div className='maintenance'>
      <Header title='Bảo trì' />
      <div className='d-flex'>
        <div className='col-sm-2 col-md-2 col-lg-3 col-xl-3'></div>
        <div className='col-12 col-sm-8 col-md-8 col-lg-6 col-xl-6'>

          <div className='maintenance-title'>
            <h5>Xe lu 10 tấn</h5>
            <p>Hướng dẫn sử dụng</p>
          </div>
          <div className='maintenance-detail'>
            <div className='attend-time mb-3 d-flex'>
              <label htmlFor='time'>Số giờ máy hôm nay: </label>
              <input id='time' type='text' value={5} />
            </div>
            <div className='attend-time mb-3 d-flex'>
              <label htmlFor='time'>Bảo trì lần cuối: </label>
              <input id='time' type='text' value={'2021-04-05 09:45'} />
            </div>
            <div className='attend-time mb-3 d-flex'>
              <label htmlFor='time'>Số giờ cuối cùng: </label>
              <input id='time' type='text' value={1000} />
            </div>
            <button className='btn btn-primary'>Bảo trì máy</button>
          </div>
          <div className='maintenance-note'>
            <div className='maintenance-display d-flex justify-content-between'>
              <div className='note-title d-flex'>
                <i class="fa-thin fa-note-sticky"></i>
                <p>Ghi Chú</p>
              </div>
              <div className='note-icon'>
                <i class="fa-sharp fa-regular fa-circle-arrow-down"></i>
              </div>
            </div>
            <div className='maintenance-hidden'>
              <p>Ghi chú cho lái xe</p>
            </div>
          </div>
          <div className='maintenance-history'>
            <div className='maintenance-display d-flex justify-content-between'>
              <div className='history-title d-flex'>
                <i class="fa-light fa-clock-rotate-left"></i>
                <p>lịch sử bảo trì</p>
              </div>
              <div className='history-icon'>
                <i class="fa-sharp fa-regular fa-circle-arrow-down"></i>
              </div>
            </div>
            <div className='maintenance-hidden'>
              <div className='history-item'>
                <div className='d-flex justify-content-between'>
                  <p className='history-date'>2021-05-03 09:30</p>
                  <p className='history-time'>1000 giờ máy</p>
                </div>
                <p>Bảo trì định kỳ thiết bị</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-2 col-md-2 col-lg-3 col-xl-3'></div>
      </div>
    </div>
  )
}

export default Maintenance
