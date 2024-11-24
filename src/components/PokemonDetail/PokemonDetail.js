import { useEffect, useState } from "react";
import "./PokemonDetail.css";

export default function PokemonDetail({ selectedId }) {
  const [pokemonDetail, setPokemonDetail] = useState({});
  useEffect(() => {
    async function fetchPokemonData() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${selectedId}`
      );
      const data = await response.json();

      const speciesResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${selectedId}`
      );

      const speciesData = await speciesResponse.json();

      const koreanName = speciesData.names.find(
        (item) => item.language.name === "ko"
      );

      setPokemonDetail((d) => ({
        ...d,
        imageUrl: data?.sprites.other["official-artwork"]["front_default"],
        koreanName,
        id: data.id,
      }));
    }
    fetchPokemonData();
  }, [selectedId]);

  return (
    <div className='detail-box'>
      <div className='image-box'>
        <img src={pokemonDetail.imageUrl} className='pokemon-detail-image' />
      </div>
      <div className='detail-description-box'>
        <h2 className='detail-name'>
          No.{pokemonDetail.id} {pokemonDetail.koreanName.name}
        </h2>
      </div>
    </div>
  );
}
