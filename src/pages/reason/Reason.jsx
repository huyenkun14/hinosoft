import Header from "../../component/header/Header";
import "./Reason.css";
import React, { useState } from "react";

const Reason = () => {
    const [imageSrcList, setImageSrcList] = useState([]);

    const handleImageChange = (event) => {
        const selectedFiles = event.target.files;

        const maxFiles = 5;
        const totalFiles = selectedFiles.length + imageSrcList.length;

        if (totalFiles > maxFiles) {
            alert(`Chỉ cho phép chọn tối đa ${maxFiles} file!`);
            event.preventDefault();
            return false;
        }

        const fileReaderList = [];
        for (let i = 0; i < selectedFiles.length; i++) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImageSrcList((prevList) => [...prevList, fileReader.result]);
            };
            fileReader.readAsDataURL(selectedFiles[i]);
            fileReaderList.push(fileReader);
            // console.log(fileReaderList);
        }
    };

    const handleRemoveImage = (indexToRemove) => {
        setImageSrcList((prevList) =>
            prevList.filter((_, index) => index !== indexToRemove)
        );
    };
    return (
        <div className="reason">
            <div className="d-flex">
                <div className="col-sm-2 col-md-2 col-lg-3 col-xl-3"></div>
                <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-6">
                    <Header title="Lí do bảo trì xe" />
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
                            rows="6"
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
                    <div className="reason-save">
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

//================================================CÓ CỐ GẮNG NHƯNG VẪN LỖI 429
// import React, { useState } from "react";

// const Reason = () => {
//     const [file, setFile] = useState();
//     const [imageUrl, setImageUrl] = useState("");

//     const handleUpload = async (event) => {
//         setFile({ file: event.target.files[0] });
//         const formData = new FormData();
//         formData.append("image", file);
//         console.log(formData);
//         try {
//             const response = await fetch(
//                 `https://api.imgur.com/3/image/`,
//                 formData,
//                 {
//                     method: "POST",
//                     body: formData,
//                     headers: {
//                         Authorization: "Client-ID 5c8d64a6fa66124",
//                         Accept: "application/json",
//                     },
//                 }
//             );

//             const data = response.json();
//             setImageUrl(data.link);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <input name="file" type="file" multiple onChange={handleUpload} />
//             <img src={imageUrl} id="img" />
//             <p id="url">{imageUrl}</p>
//         </div>
//     );
// };

// export default Reason;

//==========THỬ ĐƯỢC RỒI MÀ THỬ LẠI LẠI LỖI=============
// import React, { useState } from "react";

// function Reason() {
//     const [imageUrls, setImageUrls] = useState([]);
//     const handleFileUpload = async (event) => {
//         const files = event.target.files;

//         const promises = [];

//         for (let i = 0; i < files.length; i++) {
//             const formData = new FormData();
//             formData.append("image", files[i]);

//             const promise = fetch(`https://api.imgur.com/3/image/`, {
//                 method: "POST",
//                 headers: {
//                     Authorization: "Client-ID 5c8d64a6fa66124",
//                     Accept: "application/json",
//                 },
//                 body: formData,
//             })
//                 .then((response) => response.json())
//                 .then((data) => {
//                     const imageUrl = data.data.link;
//                     return imageUrl;
//                 })

//                 .catch((error) => console.error(error));

//             promises.push(promise);
//         }

//         Promise.all(promises).then((imageUrls) => {
//             setImageUrls(imageUrls);
//             console.log(imageUrls);
//         });
//     };

//     return (
//         <div>
//             <input type="file" multiple onChange={handleFileUpload} />
//             <ul>
//                 {imageUrls.map((imageUrl, index) => (
//                     <li key={index}>
//                         <img src={imageUrl} alt={`Image ${index + 1}`} />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Reason;
