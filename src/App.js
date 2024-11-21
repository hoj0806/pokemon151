import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PokemonBox from "./components/PokemonBox/PokemonBox";
import PokemonList from "./components/PokemonList/PokemonList";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchAllPokemonData = async () => {
      const allPokemonData = [];
      for (let i = 1; i <= 40; i++) {
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

  return (
    <div className='App'>
      <Navbar />
      <PokemonBox>
        <PokemonList pokemonData={pokemonData} />
      </PokemonBox>
      <PokemonBox />
    </div>
  );
}

export default App;
