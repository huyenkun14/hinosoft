import Header from "../../component/header/Header";
import "./Reason.css";
import React, { useState, useEffect } from "react";
import { fetchReason } from "../../service/apiService";
import { fetchMaintenance } from "../../service/apiService";

const Reason = () => {
    const [imageSrcList, setImageSrcList] = useState([]);
    const [equipments, setEquipments] = useState([]);
    const [manual_ids, setManual_ids] = useState([]);

    const [datetime, setDatetime] = useState([]);
    const [reasonBody, setReasonBody] = useState([]);

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

    useEffect(() => {
        const onFetchMaintenance = async () => {
            await fetchMaintenance().then((res) => {
                setEquipments(res.data.data);
                setManual_ids(res.data.data.manual_ids);
            });
        };
        onFetchMaintenance();
    }, []);

    const onClickSave = async () => {
        const updatedManualIds = [
            ...manual_ids,
            {
                datetime: datetime,
                reasonBody: reasonBody,
                imageSrcList: imageSrcList,
            },
        ];
        await fetchReason(updatedManualIds);
        console.log(updatedManualIds);
    };

    return (
        <div className="reason">
            <div className="d-flex">
                <div className="col-sm-2 col-md-2 col-lg-3 col-xl-3"></div>
                <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-6">
                    <Header title="Lí do bảo trì xe" />
                    <div className="reason-title d-flex justify-content-between align-items-center">
                        <h5>{equipments.name}</h5>
                        <div className="reason-time d-flex justify-content-center align-items-center">
                            <input
                                id=""
                                className="datetime"
                                value={datetime}
                                type="text"
                                autoFocus
                                placeholder="Nhập số giờ máy bảo trì"
                                onChange={(e) => setDatetime(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="reason-input">
                        <textarea
                            id=""
                            className="reasonBody"
                            value={reasonBody}
                            name=""
                            rows="6"
                            placeholder="Nhập"
                            onChange={(e) => setReasonBody(e.target.value)}
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
                    <div className="reason-save">
                        <button
                            className="btn btn-primary btn-save"
                            onClick={() => onClickSave()}
                        >
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
