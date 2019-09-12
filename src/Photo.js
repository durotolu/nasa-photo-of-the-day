import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.div`
    width: 100vw;

    img {
        opacity: 0.7;
    }
`

function Image(props) {
    const {image} = props;
    return (
        <ImageStyle>
            <img src={image.url} alt={toString(image.hdurl)}></img>
        </ImageStyle>
    );
}

export default Image;