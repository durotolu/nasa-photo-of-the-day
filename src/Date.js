import React from 'react';

function Date(props) {
    const {date, handleChange} = props;
    return (
        <div>
        <select type= "date" onChange={handleChange}>
            <option>{date.date}</option>
            <option>2019-09-10</option>
        </select>
        </div>
    );
}

export default Date;