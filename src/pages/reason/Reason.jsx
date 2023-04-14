import Header from "../../component/header/Header";
import "./Reason.css";
import React, { useState } from "react";

const Reason = () => {
    const [imageSrcList, setImageSrcList] = useState([]);

    const handleImageChange = (event) => {
        const selectedFiles = event.target.files;

        const fileReaderList = [];
        for (let i = 0; i < selectedFiles.length; i++) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImageSrcList((prevList) => [...prevList, fileReader.result]);
            };
            fileReader.readAsDataURL(selectedFiles[i]);
            fileReaderList.push(fileReader);
        }
    };

    const handleRemoveImage = (indexToRemove) => {
        setImageSrcList((prevList) =>
            prevList.filter((_, index) => index !== indexToRemove)
        );
    };
    return (
        <div className="reason">
            <Header title="Lí do bảo trì xe" />
            <div className="d-flex">
                <div className="col-sm-2 col-md-2 col-lg-3 col-xl-3"></div>
                <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-6">
                    <div className="reason-title d-flex justify-content-between align-items-center">
                        <h5>Xe lu 10 tấn</h5>
                        <div className="reason-time d-flex justify-content-center align-items-center">
                            <input
                                id=""
                                type="text"
                                autoFocus
                                placeholder="Nhập số giờ máy bảo trì"
                            />
                        </div>
                    </div>
                    <div className="reason-input">
                        <textarea
                            id=""
                            name=""
                            rows="10"
                            placeholder="Nhập"
                        ></textarea>
                    </div>
                    <div className="reason-input-img">
                        <input
                            type="file"
                            multiple
                            onChange={handleImageChange}
                        />
                        <div className="input-img-group">
                            {imageSrcList.map((imageSrc, index) => (
                                <div className="img-slide ">
                                    <div className="input-image " key={index}>
                                        <img
                                            className="input_img"
                                            src={imageSrc}
                                            alt={`Selected ${index}`}
                                        />
                                        <button
                                            className="btn-delete"
                                            onClick={() =>
                                                handleRemoveImage(index)
                                            }
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="reason-save d-flex">
                        <button className="btn btn-primary btn-save">
                            Lưu
                        </button>
                    </div>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-3 col-xl-3"></div>
            </div>
        </div>
    );
};

export default Reason;
