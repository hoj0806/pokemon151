import "./PokemonListItem.css";

export default function PokemonListItem({ pokemon }) {
  return (
    <li className='pokemon-list-item'>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <p className='pokemon-name'>
        No.{pokemon.id} {pokemon.name}
      </p>
    </li>
  );
}
