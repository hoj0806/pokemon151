import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PokemonBox from "./components/PokemonBox/PokemonBox";
import PokemonList from "./components/PokemonList/PokemonList";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const fetchAllPokemonData = async () => {
    setQuery("");

    const fetchPokemon = (id) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
        res.json()
      );

    const fetchPokemonSpecies = (id) =>
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) =>
        res.json()
      );

    // 1~151까지의 배열 생성
    const ids = Array.from({ length: 151 }, (_, index) => index + 1);

    // 데이터 병렬요청
    const pokemonPromises = ids.map((id) => fetchPokemon(id));
    const speciesPromises = ids.map((id) => fetchPokemonSpecies(id));

    const allPokemonResponses = await Promise.all(pokemonPromises);
    const allSpeciesResponses = await Promise.all(speciesPromises);

    // 데이터 결합
    const allPokemonData = allPokemonResponses.map((pokemon, index) => {
      const species = allSpeciesResponses[index];
      const koreanName = species.names.find(
        (el) => el.language.name === "ko"
      ).name;

      return {
        imageUrl: pokemon.sprites.front_default,
        name: koreanName,
        id: species.id,
      };
    });

    setPokemonData(allPokemonData);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClickSearchPokemon = () => {
    setPokemonData((data) =>
      data.filter((pokemon) => pokemon.name.includes(query))
    );
  };

  const handleSelectId = (id) => {
    setSelectedId(id);
  };

  useEffect(() => {
    fetchAllPokemonData();
  }, []);

  return (
    <div className='App'>
      <Navbar
        query={query}
        onChange={handleChange}
        onClickSearchPokemon={handleClickSearchPokemon}
        onFetchAllPokemonData={fetchAllPokemonData}
      />
      <PokemonBox>
        <PokemonList
          pokemonData={pokemonData}
          onSelectId={handleSelectId}
          selectedId={selectedId}
        />
      </PokemonBox>
      <PokemonBox />
    </div>
  );
}

export default App;
