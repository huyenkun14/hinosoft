import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../component/header/Header";
import "./Maintenance.css";
import { fetchMaintenance } from "../../service/apiService";

const Maintenance = () => {
    const [displayNote, setDisplayNote] = useState(false);
    const [displayHistory, setDisplayHistory] = useState(false);
    const [equipments, setEquipments] = useState([]);
    const [historyMaintance, setHistoryMaintance] = useState([]);
    useEffect(() => {
        const onFetchMaintenance = async () => {
            await fetchMaintenance().then((res) => {
                console.log(res.data.data);
                setEquipments(res.data.data);
                setHistoryMaintance(res.data.data.message_ids);
            });
        };
        onFetchMaintenance();
    }, []);
    return (
        <div className="maintenance">
            <div className="d-flex">
                <div className="col-md-2 col-lg-3 col-xl-3"></div>

                <div className="col-12 col-md-8 col-lg-6 col-xl-6">
                    <Header title="Bảo trì" />
                    <div className="themes maintenance-title">
                        <h5>{equipments.name}</h5>
                        <Link to="/guide">
                            <div className="maintenance-title-icon d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-circle-info "></i>

                                <p className="maintenance-title-desc mb-0">
                                    Hướng dẫn sử dụng
                                </p>
                            </div>
                        </Link>
                    </div>

                    <div className="maintenance-detail">
                        <div className="attend-time mb-3 d-flex">
                            <label htmlFor="time">Số giờ máy hôm nay: </label>
                            <input
                                id="time"
                                type="text"
                                value={equipments.machine_attendence_time}
                            />
                        </div>
                        <div className="attend-time mb-3 d-flex">
                            <label htmlFor="time">Bảo trì lần cuối: </label>
                            <input
                                id="time"
                                type="text"
                                value={equipments.last_request}
                            />
                        </div>
                        <div className="attend-time mb-3 d-flex">
                            <label htmlFor="time">Số giờ cuối cùng: </label>
                            <input
                                id="time"
                                type="text"
                                value={equipments.machine_running_time}
                            />
                        </div>
                        <Link to="/reason">
                            <button className="btn btn-primary">
                                Bảo trì máy
                            </button>
                        </Link>
                    </div>
                    <div
                        className="maintenance-note"
                        onClick={() => setDisplayNote(!displayNote)}
                    >
                        <div className="maintenance-display d-flex justify-content-between">
                            <i class="fa-regular fa-note-sticky"></i>
                            <div className="note-title d-flex text-info">
                                <p>Ghi Chú</p>
                            </div>
                            <div className="note-icon">
                                <i
                                    className={`fa-solid fa-circle-chevron-down ${
                                        displayNote ? "active" : ""
                                    }`}
                                ></i>
                            </div>
                        </div>
                        <div className={displayNote ? displayNote : "toggle "}>
                            <p>Ghi chú cho lái xe</p>
                        </div>
                    </div>
                    <div
                        className="maintenance-history"
                        onClick={() => setDisplayHistory(!displayHistory)}
                    >
                        <div className="maintenance-display d-flex justify-content-between">
                            <i className="fa-solid fa-clock-rotate-left"></i>
                            <div className="history-title d-flex text-info">
                                <p>lịch sử bảo trì</p>
                            </div>
                            <div className="history-icon">
                                <i
                                    className={`fa-solid fa-circle-chevron-down ${
                                        displayHistory ? "active" : ""
                                    }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={
                                displayHistory ? displayHistory : "toggle"
                            }
                        >
                            {historyMaintance.map((equipment) => (
                                <div className="history-item">
                                    <div className="d-flex justify-content-between">
                                        <p className="history-date">
                                            {equipment.date}
                                        </p>
                                        <p className="history-time">
                                            {equipment.date}
                                        </p>
                                    </div>
                                    <p>{equipment.body}</p>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-md-2 col-lg-3 col-xl-3"></div>
            </div>
        </div>
    );
};

export default Maintenance;
