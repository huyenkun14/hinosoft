
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QR.css';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
import ResultContainerPlugin from './ResultContainerPlugin.jsx';

const QR = (props) => {

    let navigate = useNavigate()

    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("QR [result]", decodedResult);
        // @ts-ignore
        setDecodedResults(prev => [...prev, decodedResult]);
    };

    let qrboxFunction = function (viewfinderWidth, viewfinderHeight) {
        let minEdgePercentage = 0.7; // 70%
        let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
        let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
        return {
            width: qrboxSize,
            height: qrboxSize
        };
    }

    return (
        <div className='QR'>
            <section className="QR-section">
                <div className="QR-section-title d-flex justifty-content-start">
                    <div className='col-4'>
                        <i className="fa-solid fa-x"
                            onClick={() => navigate('/')}
                        ></i>
                    </div>
                    <p className='col-4'>Quét mã</p>
                </div>
                <br />
                <Html5QrcodePlugin
                    fps={10}
                    qrbox={qrboxFunction}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                />
                <ResultContainerPlugin results={decodedResults} />
            </section>
        </div>
    );
};

export default QR;
