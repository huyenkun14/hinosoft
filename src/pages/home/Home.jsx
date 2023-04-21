import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../../component/header/Header";
import AttendItem from "../../component/attendItem/AttendItem";
import { useContext } from "react";
import AttendItemTestApi from "../../component/attendItem/AttendItemTestApi";
import UserProvider, { userContext } from "../../store/UserProvider";

const Home = () => {

  const navigate = useNavigate()
  const { userData } = useContext(userContext)
  const [isSubmit, setIsSubmit] = useState(false)
  const [historyList, setHistoryList] = useState();

  useEffect(() => {
    if (localStorage.getItem('token'))
      setIsSubmit(true)
  })

  const renderHome = (
    <div className="home">
      <div className="d-flex flex-wrap">
        <div className="col-md-1 col-lg-1 col-xl-1"></div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Header title="Trang chủ" />
        </div>
        <div className="col-md-5 col-lg-5 col-xl-5"></div>
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
              <h4>{userData ? userData.name : "John Wick"}</h4>
              <p>Lái xe</p>
            </div>
            <div className="account-contact">
              <p>
                <i className="fa-solid fa-location-dot"></i>&emsp;Quỳnh Phụ, Thái Bình
              </p>
              <p>
                <i className="fa-solid fa-phone-flip"></i>&emsp;0904 966 113
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-1 col-lg-1 col-xl-1"></div>

        <div className="col-12 col-md-6 col-lg-6 col-xl-6 home-attend">
          {historyList ? (
            historyList.map((result, index) => (
              <div key={index}>
                <AttendItemTestApi history={result} />
              </div>
            ))
          ) : (
            <AttendItem />
          )}


          <div className="home-button d-flex justify-content-center">
            <Link to="/scan">
              <button className="btn btn-primary">Quét mã</button>
            </Link>
          </div>
        </div>
      </div>
      <button onClick={() => console.warn(userData)}></button>
    </div>
  )

  return (
    <div>
      {isSubmit ? renderHome : navigate('/login')}
    </div>
  )

};

export default Home;
