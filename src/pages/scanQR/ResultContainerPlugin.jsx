import React from 'react';
import { useNavigate } from 'react-router-dom';

function filterResults(results) {
    let filteredResults = [];
    for (var i = 0; i < results.length; ++i) {
        if (i === 0) {
            filteredResults.push(results[i]);
            continue;
        }

        if (results[i].decodedText !== results[i - 1].decodedText) {
            filteredResults.push(results[i]);
        }
    }
    return filteredResults;
}

const ResultContainerTable = ({ data }) => {
    const results = filterResults(data);
    return (
        <div className={'Qrcode-result'}>
                {
                    results.map((result, i) => {
                        console.log(result);
                        return (<div key={i}>
                            <p>{result.decodedText}</p>
                        </div>);
                    })
                }
        </div>
    );
};

const ResultContainerPlugin = (props) => {

    const navigate = useNavigate()

    const results = filterResults(props.results);
    return (
        <div className='Result-container'>
            <div className='Result-section'>
                <ResultContainerTable data={results} />
            </div>
            <div className='Result-button mt-3'>
                <button className='btn btn-primary'
                onClick={() => navigate('/attendance')}
                >Điểm danh</button>
                <button className='btn btn-secondary'
                onClick={() => navigate('/maintenance')}
                >bảo trì</button>
            </div>
        </div>
    );
};

export default ResultContainerPlugin;
