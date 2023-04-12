import AttendItem from '../../component/attendItem/AttendItem'
import Header from '../../component/header/Header'
import './History.css'
import React from 'react'

const History = () => {
    return (
        <div className='history'>
            <Header />
            <div className='history-inner d-flex'>
                <div className='col-1 col-sm-1 col-md-3 col-lg-3 col-xl-3'></div>
                <div className='col-10 col-sm-10 col-md-6 col-lg-6 col-xl-6'>
                    <h1>Lịch sử điểm danh</h1>
                    <div className='history-item'>
                        <AttendItem />
                    </div>
                    <div className='history-item'>
                        <AttendItem />
                    </div>
                    <div className='history-item'>
                        <AttendItem />
                    </div>
                    <div className='history-item'>
                        <AttendItem />
                    </div>
                </div>
            </div>
            <div className='col-1 col-sm-1 col-md-3 col-lg-3 col-xl-3'></div>
        </div>
    )
}

export default History