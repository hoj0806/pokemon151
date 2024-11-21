import PokemonListItem from "../PokemonListItem/PokemonListItem";
import "./PokemonList.css";

export default function PokemonList({ pokemonData }) {
  return (
    <ul className='pokemon-list'>
      {pokemonData.map((pokemon) => {
        return <PokemonListItem pokemon={pokemon} key={pokemon.id} />;
      })}
    </ul>
  );
}
