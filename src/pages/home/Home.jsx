import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Header from "../../component/header/Header";
import AttendItem from "../../component/attendItem/AttendItem";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../service/AuthProvider";
import { fetchAttendanceList } from "../../service/apiService";
import AttendItemTestApi from "../../component/attendItem/AttendItemTestApi";
export const client = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://hinosoft.com/api",
});

const Home = (props) => {
  const { userInfo } = useContext(AuthContext);
  console.log(userInfo);
  const [historyList, setHistoryList] = useState();
  useEffect(() => {
    fetchAttendanceList().then((res) => {
      console.log(res.data.data.results);
      setHistoryList(res.data.data.results);
    });
  }, []);

  return (
    <div className="home">
      <div className="d-flex flex-wrap">
        <div className="col-12 col-md-8 col-lg-8 col-xl-8">
          <Header title="Trang chủ" />
        </div>
        <div className="col-12 col-md-4 col-lg-4 col-xl-4"></div>
      </div>
      <div className="home-inner d-flex flex-wrap">
        <div className="themes home-account col-12 col-md-4 col-lg-4 col-xl-4">
          <div className="account-detail d-flex justify-content-center flex-column">
            <div className="account-avt">
              <img
                src="https://img.lovepik.com/free-png/20211204/lovepik-cartoon-avatar-png-image_401302777_wh1200.png"
                alt=""
              />
            </div>
            <div className="account-info">
              {/* <h4>John Wick</h4> */}
              {/* <h4>{userInfo.name}</h4> */}
              <h4>{userInfo ? userInfo.name : "John Wick"}</h4>
              <p>Lái xe</p>
            </div>
            <div className="account-contact">
              <p>
                <i class="fa-solid fa-location-dot"></i>&emsp;Quỳnh Phụ, Thái
                Bình
              </p>
              <p>
                <i class="fa-solid fa-phone-flip"></i>&emsp;0904 966 113
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-1 col-lg-1 col-xl-1"></div>

        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          {historyList ? (
            historyList.map((result, index) => (
              <div className="home-attend" key={index}>
                <AttendItemTestApi history={result} />
              </div>
            ))
          ) : (
            <AttendItem />
          )}
          <div className="home-attend">
            <AttendItem />
          </div>
          

          <div className="home-button d-flex justify-content-center">
            <Link to="scan">
              <button className="btn btn-primary">Quét mã</button>
            </Link>
          </div>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1"></div>
      </div>
    </div>
  );
};

export default Home;
