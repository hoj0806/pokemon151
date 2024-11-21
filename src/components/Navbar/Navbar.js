import "./Navbar.css";

export default function Navbar({
  query,
  onChange,
  onClickSearchPokemon,
  onFetchAllPokemonData,
}) {
  return (
    <header className='navbar'>
      <h1>Poke151</h1>
      <input
        className='search-input'
        placeholder='포켓몬을 검색해보세요!'
        value={query}
        onChange={onChange}
      ></input>
      <button onClick={onClickSearchPokemon}>검색</button>
      <button onClick={onFetchAllPokemonData}>초기화</button>
    </header>
  );
}
