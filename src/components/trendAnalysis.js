import React from 'react';
import './trendAnalysisStyles.css';

class TrendAnalysis extends React.Component {

    render() {
        return(
            <div className='trend-main-section'>
                <br/>
                <div>
                    <h1 style={{ color: 'navy' }}>Trend Analysis</h1>
                </div>
                <br/>
                <div className='table-container'>
                    <table className='table'>
                        <tr>
                            <th style={{ textAlign: 'left'}}>User</th>
                            <th>Accuracy</th>
                            <th>Attempt</th>
                            <th>Score</th>
                            <th>Band</th>
                        </tr>
                        <br/>
                        <tr className='td1 text'>
                            <td style={{ textAlign: 'left'}}>You</td>
                            <td>60%</td>
                            <td>5</td>
                            <td>6</td>
                            <td>6</td>
                        </tr>
                        <br/>
                        <tr className='td2 text'>
                            <td style={{ textAlign: 'left'}}>Talati Shlok (Topper)</td>
                            <td>95%</td>
                            <td>3</td>
                            <td>8.5</td>
                            <td>8.5</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default TrendAnalysis;