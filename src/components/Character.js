import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: black;
`

const StyledHeader = styled.h1`
    color: white;
`

const StyledPara = styled.p`
    color: white;
`

const Character = props => {
    const { name, birth, homeworld } = props;

    return (
        <StyledDiv>
            <StyledHeader>{name}</StyledHeader>
            <StyledPara>Birth Year: {birth}</StyledPara>
            <StyledPara>Place Of Birth: {homeworld}</StyledPara>
        </StyledDiv>
    )
}

export default Character