import "./Header.css";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../pages/login/Login";
const Header = (props) => {
    // const userData = useContext(UserContext)
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate()

    return (
        <div className="header">
            <div className="d-flex justify-content-evenly header-title align-items-center">
                <div className="col-2">
                    <p><i
                        class="fa-solid fa-bars"
                        onClick={() => setToggle(!toggle)}
                    ></i></p>

                </div>
                <div className="col-8">
                    <p>{props.title}</p>
                </div>
                <div className="col-2">
                    <div className="header-avt mx-auto">
                        <img
                            src="https://img.lovepik.com/free-png/20211204/lovepik-cartoon-avatar-png-image_401302777_wh1200.png"
                            alt=""
                            onClick={() => navigate('/')}
                        />
                    </div>
                </div>
            </div>
            <div className={`navbar-contain ${toggle ? toggle : "toggle"}`}>
                <div className='navbar'>
                    <div className="nav-header d-flex justify-content-between">
                        <div className="d-flex">
                            <div className="user-img">
                                <Link to="/">
                                    <img
                                        src="https://img.lovepik.com/free-png/20211204/lovepik-cartoon-avatar-png-image_401302777_wh1200.png"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="user-info" style={{color: 'black'}}>
                                <span>
                                    <b>John Wick</b>
                                    {/* <b>{userData.name}</b> */}
                                </span>
                                <p>Lái xe</p>
                            </div>
                        </div>
                        <div className="nav-icon" style={{color: 'black'}}>
                            <i
                                class="fa-solid fa-x col-4"
                                onClick={() => setToggle(!toggle)}
                            ></i>
                        </div>
                    </div>

                    <ul className="nav-items">
                        <li className="nav-link d-flex justify-content-between"
                            onClick={() => {
                                navigate('/')
                                setToggle(!toggle)
                            }}>
                            Trang chủ
                            <i class="fa-solid fa-chevron-right"></i>
                        </li>
                        <li className="nav-link d-flex justify-content-between"
                            onClick={() => {
                                navigate('/attendance')
                                setToggle(!toggle)
                            }}>
                            Điểm danh
                            <i class="fa-solid fa-chevron-right"></i>
                        </li>
                        <li className="nav-link d-flex justify-content-between"
                            onClick={() => {
                                navigate('/maintenance')
                                setToggle(!toggle)
                            }}>
                            Bảo trì máy
                            <i class="fa-solid fa-chevron-right"></i>
                        </li>
                        <li className="nav-link d-flex justify-content-between"
                            onClick={() => {
                                navigate('/attendance_history')
                                setToggle(!toggle)
                            }}>
                            Lịch sử điểm danh
                            <i class="fa-solid fa-chevron-right"></i>
                        </li>
                        <li className="logout">Đăng xuất</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
