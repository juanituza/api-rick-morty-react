import { useState } from 'react';
import imageRickMorty from './img/rick-morty.png';
import Characters from './components/characters';
import "./index.css";

function App() {
  const [character , setCharacter] = useState(null)
  const reqApi = async () =>{
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacter(characterApi.results);
   
  
    }

    //  console.log(character);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>
        {character ? (<Characters characters={character} setCharacters={setCharacter} />) : ( <>
        <img src={imageRickMorty} alt="Rick & morty" className="img-home" />
        <button onClick={reqApi} className="btn-search">
          Buscar personajes
        </button>
        </>
        )}
        
       
      </header>
    </div>
  );
}

export default App;
