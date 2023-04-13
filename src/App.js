import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Attendance from "./pages/attendance/Attendance";
import History from "./pages/attendance_history/History";
import Maintenance from "./pages/maintenance/Maintenance";
import Reason from "./pages/reason/Reason";
import Guide from "./pages/guide/Guide";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forget from "./pages/forget/Forget";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="forget" element={<Forget />} />
                    <Route path="register" element={<Register />} />
                    <Route path="attendance" element={<Attendance />} />
                    <Route path="attendance_history" element={<History />} />
                    <Route path="maintenance" element={<Maintenance />} />
                    <Route path="reason" element={<Reason />} />
                    <Route path="guide" element={<Guide />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
