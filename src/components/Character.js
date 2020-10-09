import React, { useState } from 'react';
import styled from 'styled-components'


const StyledCharacterCard = styled.div`
    background: #BA4919;
    width: 25%;
    padding: 1%;
    margin-bottom: 5%;
    border-radius: 20px;
    `

const StyledHeader = styled.h1`
    &:hover{
        cursor: pointer;
    }
`


const Character = props => {

    const { 
        name, 
        height,
        mass,
        hairColor,
        skinColor,
        eyeColor,
        birth,
        gender, 
    } = props;

    const [headerCard, setHeaderCard] = useState(true)

    if (headerCard) {
        return (
            <StyledCharacterCard>
                <StyledHeader onClick = {event => {setHeaderCard(false)}}>{name}</StyledHeader>
            </StyledCharacterCard>
        )
    }

    return (
        <StyledCharacterCard>
            <StyledHeader onClick = {event => {setHeaderCard(true)}}>{name}</StyledHeader>
            <p>Height: {height} cm</p>
            <p>Mass: {mass} kg</p>
            <p>Hair Color: {hairColor}</p>
            <p>Skin Color: {skinColor}</p>
            <p>Eye Color: {eyeColor}</p>
            <p>Birth Year: {birth}</p>
            <p>Gender: {gender}</p>
        </StyledCharacterCard>
    )
}

export default Character