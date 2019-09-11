import React from 'react';

function Image(props) {
    const {image} = props;
    return (
        <div>
            <img src={image.url} alt={toString(image.hdurl)}></img>
        </div>
    );
}

export default Image;