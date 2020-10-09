import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Character from './components/Character'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [character, setCharacter] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    const fetchCharacter = () => {
      axios.get(`https://swapi.dev/api/people/1/`)
        .then(resolve => {
          setCharacter(resolve.data);
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
      <Character name={character.name} birth={character.birth_year} homeworld={character.homeworld}></Character>
    </div>
  );
}

export default App;
