// @ts-check

import React, { useState } from 'react';
import './QR.css';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
import ResultContainerPlugin from './ResultContainerPlugin.jsx';

const QR = (props) => {
    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("QR [result]", decodedResult);
        // @ts-ignore
        setDecodedResults(prev => [...prev, decodedResult]);
    };

    return (
        <div className="QR">
            <section className="QR-section">
                <div className="QR-section-title">Quét mã</div>
                <br />
                <br />
                <br />
                <Html5QrcodePlugin
                    fps={10}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                />
                <ResultContainerPlugin results={decodedResults} />
            </section>
        </div>
    );
};

export default QR;
