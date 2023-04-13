import AttendItem from '../../component/attendItem/AttendItem'
import Header from '../../component/header/Header'
import './History.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const History = () => {
    const navigate = useNavigate();
    return (
        <div className='history'>
            <Header title='Lịch sử điểm danh' />
            <div className='d-flex'>
                <div className='col-sm-2 col-md-2 col-lg-3 col-xl-3'></div>
                <div className='col-12 col-sm-8 col-md-8 col-lg-6 col-xl-6'>

                    <div className='history-inner'>
                        <div className='history-item' 
                        onClick={() => navigate('/attendance_detail')}
                        >
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
                <div className='col-sm-2 col-md-2 col-lg-3 col-xl-3'></div>
            </div>
        </div>
    )
}

export default History