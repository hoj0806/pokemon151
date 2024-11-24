import "./PokemonListItem.css";

export default function PokemonListItem({ pokemon, onSelectId, selectedId }) {
  const active = pokemon.id === selectedId;
  return (
    <li
      className={`pokemon-list-item ${active ? "selected" : ""}`}
      onClick={() => onSelectId(pokemon.id)}
    >
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <p className='pokemon-name'>
        No.{pokemon.id} {pokemon.name}
      </p>
    </li>
  );
}
