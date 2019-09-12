import React from 'react';
import styled from 'styled-components';

const fontWeight = {
    fontWeight: 'bold'
}

const DescriptionStyle = styled.div`
    background-color: grey;
`

function Description(props) {
    const {description} = props;
    return (
        <DescriptionStyle>
            <p><span style={fontWeight}>Explanation:</span> {description.explanation}</p>
        </DescriptionStyle>
    );
}

export default Description;