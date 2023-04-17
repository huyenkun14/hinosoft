import AttendItem from '../../component/attendItem/AttendItem'
import Header from '../../component/header/Header'
import './History.css'
import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../service/AuthProvider";
import { client } from '../home/Home'
import AttendItemTestApi from '../../component/attendItem/AttendItemTestApi'
const History = () => {
    const {userInfo} = useContext(AuthContext)
    const navigate = useNavigate();
    const [historyList, setHistoryList] = useState()
    const fetchAttendanceList = () => {
        let accessToken = localStorage.getItem("accessToken");
        console.log(accessToken)
        const params = '/attendence'
        return client
        .get(params, {
            headers: {
                'Content-Type': 'application/json',
                'access_token': accessToken
            }
        }
        )
        .then(res => {
            console.log(res.data.data.results)
            setHistoryList(res.data.data.results)
        })
    }
    useEffect(() => {
        fetchAttendanceList()
    },[])
    return (
        <div className='history'>
            <div className='d-flex'>
                <div className='col-sm-2 col-md-2 col-lg-3 col-xl-3'></div>
                <div className='col-12 col-sm-8 col-md-8 col-lg-6 col-xl-6'>

                    <Header title='Lịch sử điểm danh' />

                    <div className='history-inner'>
                        {
                            historyList 
                            ? historyList.map((result, index) => (
                                <div className='history-item'>
                            <AttendItemTestApi history = {result} />
                                </div>
                            ))
                            : <AttendItem />
                        }
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