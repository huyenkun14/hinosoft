import AttendItem from "../../component/attendItem/AttendItem";
import Header from "../../component/header/Header";
import "./Attendance-detail.css";
import React from "react";

import { fetchLogin, getListLogin} from "../../service/apiService";
import accessToken from "../../service/apiService";
import axios from "axios"
const AttendanceDetail = () => {
    

  return (
    <div className="detail">
      <Header title="Chi tiết điểm danh" />
      <div className="d-flex">
        <div className="col-sm-2 col-md-2 col-lg-3 col-xl-3"></div>
        <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-6">
       
          <div className="history-inner">
            <div className="history-item">
              <AttendItem />
            </div>
            <hr/>
            <div className="attend-local" style={{marginLeft: 20}}>
                <label>Vị trí: </label>
                <select>
                <option>Vị trí A</option>
                </select>
            </div>
          </div>
          
          {/* <div className="history-image">

          </div> */}
        <div className='save-button'>
          <button type="button" className="btn btn-primary" >Lưu</button>         
        </div>
        </div>
        <div className="col-sm-2 col-md-2 col-lg-3 col-xl-3"></div>
      </div>
    </div>
  );
};

export default AttendanceDetail ;

