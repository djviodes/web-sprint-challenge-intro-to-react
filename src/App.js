import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'
import './App.css';


const StyledCardLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`


const App = () => {

  const [character, setCharacter] = useState([]);



  useEffect(() => {
    const fetchCharacter = () => {
      axios.get(`https://swapi.dev/api/people/`)
        .then(resolve => {
          setCharacter(resolve.data.results);
        })
        .catch(error => {
          debugger
        })
    }
    fetchCharacter()
  }, []);

  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledCardLayout>
        {
          character.map((character, index) => {
            return (
              <Character
                key={index}
                name={character.name} 
                height={character.height}
                mass={character.mass}
                hairColor={character.hair_color}
                skinColor={character.skin_color}
                eyeColor={character.eye_color}
                birth={character.birth_year}
                gender={character.gender}
              />
            )
          })
        }
      </StyledCardLayout>
    </div>
  );
}

export default App;
