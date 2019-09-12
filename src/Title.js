import React from 'react';
import styed from 'styled-components';

const fontWeight = {
    fontWeight: 'bold'
}



function Title(props) {
    const {title} = props;
    return (
        <div>
            <p style={fontWeight}>{title.title}</p>
            <p style={fontWeight}>Image Credit & Copyright: {title.copyright}</p>
        </div>
    );
}

export default Title;