import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
    background-color: orangered;

    p {
        color: purple;
    }
`

function Header() {
    return (
        <HeaderStyle>
            <h1>Astronomy Picture of the Day</h1>
            <p><a href="https://apod.nasa.gov/apod/archivepix.html" target="_blank" rel="noopener noreferrer">Discover the cosmos!</a> Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
        </HeaderStyle>
    );
}

export default Header;