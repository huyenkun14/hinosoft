import "./Header.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../pages/login/Login";
const Header = (props) => {
    // const userData = useContext(UserContext)
    const [toggle, setToggle] = useState(false);
    return (
        <div className="header bg-primary">
            <div className="d-flex justify-content-evenly header-title align-items-center">
                <div className="col-4">
                    <p>
                        <i
                            class="fa-solid fa-bars"
                            onClick={() => setToggle(!toggle)}
                        ></i>
                    </p>
                </div>
                <div className="col-4 d-flex align-items-center">
                    <p>{props.title}</p>
                </div>
                <div className="col-4">
                    <div className="header-avt mx-auto">
                        <img
                            src="https://img.lovepik.com/free-png/20211204/lovepik-cartoon-avatar-png-image_401302777_wh1200.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={toggle ? toggle : "toggle"}>
                <div className="navbar">
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
                            <div className="user-info">
                                <span>
                                    <b>John Wick</b>
                                    {/* <b>{userData.name}</b> */}
                                </span>
                                <p>Lái xe</p>
                            </div>
                        </div>
                        <div className="nav-icon">
                            <i
                                class="fa-solid fa-bars col-4"
                                onClick={() => setToggle(!toggle)}
                            ></i>
                        </div>
                    </div>

                    <ul className="nav-items">
                        <Link to="/attendance">
                            <li className="nav-link d-flex justify-content-between">
                                Điểm danh
                                <i class="fa-regular fa-right-to-bracket"></i>
                            </li>
                        </Link>
                        <Link to="/maintenance">
                            <li className="nav-link d-flex justify-content-between">
                                Bảo trì máy
                                <i class="fa-regular fa-right-to-bracket"></i>
                            </li>
                        </Link>
                        <Link to="/attendance_history">
                            <li className="nav-link d-flex justify-content-between">
                                Lịch sử điểm danh
                                <i class="fa-regular fa-right-to-bracket"></i>
                            </li>
                        </Link>
                        <li className="logout">Đăng xuất</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
