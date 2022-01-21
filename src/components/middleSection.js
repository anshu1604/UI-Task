import React from 'react';
import './middleSectionStyles.css';

class MiddleSection extends React.Component {

    render() {
        return (
            <div className='middle-section'>
                <div className='circle' style={{ float: 'left' }}>
                    <p><b style={{fontSize: 60}}>6.5 </b><br/><b style={{ fontSize: 40, color: 'lightgray'}}> Band</b></p>
                </div>
                <div className='questions'>
                    <div className='question-section'>
                        <p>&nbsp;&nbsp;Total <br/>Questions <br/><br/>&nbsp;&nbsp;&nbsp; 40</p>
                    </div>
                    <div class="vl"></div>
                    <div className='question-section'>
                        <p>&nbsp;Questions <br/>&nbsp;Attended <br/><br/>&nbsp;&nbsp;&nbsp; 35</p>
                    </div>
                    <div class="vl"></div>
                    <div className='question-section'>
                        <p>&nbsp;Correct <br/>&nbsp;Answers <br/><br/>&nbsp;&nbsp;&nbsp; 31</p>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default MiddleSection;
