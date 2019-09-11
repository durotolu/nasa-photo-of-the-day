import React from 'react';

function Date(props) {
    const {date} = props;
    return (
        <div>
        <select>{date.date}</select>
        </div>
    );
}

export default Date;