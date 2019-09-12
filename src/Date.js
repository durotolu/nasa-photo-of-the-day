import React from 'react';
import styled from 'styled-components';

const DateStyle = styled.div`
    font-size: 100%;
    color: purple;
    font-weight: bold;
`

function Date(props) {
    const {date, handleChange} = props;
    return (
        <div>
        <DateStyle type= "date" onChange={handleChange}>
            <option>{date.date}</option>
        </DateStyle>
        </div>
    );
}

export default Date;