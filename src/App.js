import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'
import './App.css';


const StyledColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 2.5%;
`

const StyledColumn = styled.div`
  width: 20%;
`


const App = () => {

  const [character, setCharacter] = useState([]);
  const [characterTwo, setCharacterTwo] = useState([]);
  const [characterThree, setCharacterThree] = useState([]);
  const [characterFour, setCharacterFour] = useState([]);
  const [characterFive, setCharacterFive] = useState([]);
  const [characterSix, setCharacterSix] = useState([]);
  const [characterSeven, setCharacterSeven] = useState([]);
  const [characterEight, setCharacterEight] = useState([]);



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

  const [planet, setPlanet] = useState([])

    useEffect(() => {
        const fetchPlanet = () => {
            axios.get(`http://swapi.dev/api/planets/1/`)
                .then(resolve => {
                    setPlanet(resolve.data)
                })
                .catch(error => {
                    debugger
                })
        }
        fetchPlanet()
    }, [])

    useEffect(() => {
      const fetchCharacter = () => {
        axios.get(`https://swapi.dev/api/people/2/`)
          .then(resolve => {
            setCharacterTwo(resolve.data);
          })
          .catch(error => {
            debugger
          })
      }
      fetchCharacter()
    }, []);
  
    useEffect(() => {
      const fetchCharacter = () => {
        axios.get(`https://swapi.dev/api/people/3/`)
          .then(resolve => {
            setCharacterThree(resolve.data);
          })
          .catch(error => {
            debugger
          })
      }
      fetchCharacter()
    }, []);

    const [planetTwo, setPlanetTwo] = useState([])

    useEffect(() => {
      const fetchPlanet = () => {
          axios.get(`http://swapi.dev/api/planets/8/`)
              .then(resolve => {
                setPlanetTwo(resolve.data)
              })
              .catch(error => {
                  debugger
              })
      }
      fetchPlanet()
  }, [])

    useEffect(() => {
      const fetchCharacter = () => {
        axios.get(`https://swapi.dev/api/people/4/`)
          .then(resolve => {
            setCharacterFour(resolve.data);
          })
          .catch(error => {
            debugger
          })
      }
      fetchCharacter()
    }, []);

    useEffect(() => {
      const fetchCharacter = () => {
        axios.get(`https://swapi.dev/api/people/5/`)
          .then(resolve => {
            setCharacterFive(resolve.data);
          })
          .catch(error => {
            debugger
          })
      }
      fetchCharacter()
    }, []);

    const [planetThree, setPlanetThree] = useState([])

    useEffect(() => {
      const fetchPlanet = () => {
          axios.get(`http://swapi.dev/api/planets/2/`)
              .then(resolve => {
                setPlanetThree(resolve.data)
              })
              .catch(error => {
                  debugger
              })
      }
      fetchPlanet()
  }, [])

    useEffect(() => {
      const fetchCharacter = () => {
        axios.get(`https://swapi.dev/api/people/6/`)
          .then(resolve => {
            setCharacterSix(resolve.data);
          })
          .catch(error => {
            debugger
          })
      }
      fetchCharacter()
    }, []);

    useEffect(() => {
      const fetchCharacter = () => {
        axios.get(`https://swapi.dev/api/people/7/`)
          .then(resolve => {
            setCharacterSeven(resolve.data);
          })
          .catch(error => {
            debugger
          })
      }
      fetchCharacter()
    }, []);

    useEffect(() => {
      const fetchCharacter = () => {
        axios.get(`https://swapi.dev/api/people/8/`)
          .then(resolve => {
            setCharacterEight(resolve.data);
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
      <StyledColumns>
        <StyledColumn className="columnOne">
          <Character name={character.name} birth={character.birth_year} homeworld={planet.name}></Character>
          <Character name={characterTwo.name} birth={characterTwo.birth_year} homeworld={planet.name}></Character>
        </StyledColumn>
        <StyledColumn className="columnTwo">
          <Character name={characterThree.name} birth={characterThree.birth_year} homeworld={planetTwo.name}></Character>
          <Character name={characterFour.name} birth={characterFour.birth_year} homeworld={planet.name}></Character>
        </StyledColumn>
        <StyledColumn className="columnThree">
          <Character name={characterFive.name} birth={characterFive.birth_year} homeworld={planetThree.name}></Character>
          <Character name={characterSix.name} birth={characterSix.birth_year} homeworld={planet.name}></Character>
        </StyledColumn>
        <StyledColumn className="columnFour">
          <Character name={characterSeven.name} birth={characterSeven.birth_year} homeworld={planet.name}></Character>
          <Character name={characterEight.name} birth={characterEight.birth_year} homeworld={planet.name}></Character>
        </StyledColumn>
      </StyledColumns>
    </div>
  );
}

export default App;
