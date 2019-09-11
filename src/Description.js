import React from 'react';

const fontWeight = {
    fontWeight: 'bold'
}

function Description(props) {
    const {description} = props;
    return (
        <div>
            <p><hg style={fontWeight}>Explanation:</hg> {description.explanation}</p>
        </div>
    );
}

export default Description;