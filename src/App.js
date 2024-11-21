import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PokemonBox from "./components/PokemonBox/PokemonBox";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchAllPokemonData = async () => {
      const allPokemonData = [];
      for (let i = 1; i <= 151; i++) {
        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);

        // image Reponse
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        const frontSpriteImage = data.sprites.front_default;

        // name Response
        const speciesResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${i}`
        );
        const speciesData = await speciesResponse.json();

        const koreanName = speciesData.names.find(
          (el) => el.language.name === "ko"
        ).name;
        allPokemonData.push({
          imageUrl: frontSpriteImage,
          name: koreanName,
          id: speciesData.id,
        });
      }
      setPokemonData(allPokemonData);
    };

    fetchAllPokemonData();
  }, []);

  console.log(pokemonData);
  return (
    <div className='App'>
      <Navbar />
      <PokemonBox />
      <PokemonBox />
      {pokemonData.map((el) => {
        return (
          <div key={el.id}>
            <img src={el.imageUrl} alt={el.name} />
            <div>{el.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
