import PokemonListItem from "../PokemonListItem/PokemonListItem";
import "./PokemonList.css";

export default function PokemonList({ pokemonData, onSelectId, selectedId }) {
  return (
    <ul className='pokemon-list'>
      {pokemonData.map((pokemon) => {
        return (
          <PokemonListItem
            pokemon={pokemon}
            key={pokemon.id}
            onSelectId={onSelectId}
            selectedId={selectedId}
          />
        );
      })}
    </ul>
  );
}
