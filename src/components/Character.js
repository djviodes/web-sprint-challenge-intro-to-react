import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 90%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #BD4E1E;
    padding: 4%;
    margin-bottom: 20%;
`

const StyledHeader = styled.h1`
    color: #120703;
`

const StyledPara = styled.p`
    color: #120703;
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