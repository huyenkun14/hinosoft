import AttendItem from '../../component/attendItem/AttendItem'
import Header from '../../component/header/Header'
import './History.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
// import { AuthContext } from "../../service/AuthProvider";
import AttendItemTestApi from '../../component/attendItem/AttendItemTestApi'

const History = () => {

    // const {userInfo} = useContext(AuthContext)
    const navigate = useNavigate();
    const [historyList, setHistoryList] = useState()
    // useEffect(() => {
    //     fetchAttendanceList()
    //     .then(res => {
    //         console.log(res.data.data.results)
    //         setHistoryList(res.data.data.results)
    //     })
    // },[])
    const GotoDetail = (detail) => {
        navigate("/attendance_detail", {state: {detail}})
    }
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
                                <div className='history-item' key={index} onClick={() => GotoDetail(result)}>
                            <AttendItemTestApi history = {result} />
                                </div>
                            ))
                            : <AttendItem />
                        }
                    </div>
                </div>
                <div className='col-sm-2 col-md-2 col-lg-3 col-xl-3'></div>
            </div>
        </div>
    )
}

export default History