// import AttendItem from "../../component/attendItem/AttendItem";
import Header from "../../component/header/Header";
import "./AttendanceDetail.css";
import React from "react";
import AttendItemTestApi from "../../component/attendItem/AttendItemTestApi";
import { useLocation } from "react-router-dom";
const AttendanceDetail = () => {
  const location = useLocation();
  const history = location ? location.state.detail : ""
  console.log(history)
  return (
    <div className="detail">
      <Header title="Chi tiết điểm danh" />
      <div className="d-flex">
        <div className="col-sm-2 col-md-2 col-lg-3 col-xl-3"></div>
        <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-6">
       
          <div className="history-inner">
            <div className="menu-item">
              <AttendItemTestApi history={history} />
              {/* <AttendItem /> */}
            </div>
            <hr/>
            <div className="attend-local" style={{marginLeft: 20}}>
                <label>Vị trí: </label>
                <select>
                <option>{history ? history.location_id.name : "Vi tri A"}</option>
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

