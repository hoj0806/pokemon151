import "./Navbar.css";

export default function Navbar() {
  return (
    <header className='navbar'>
      <h1>Poke151</h1>
      <input
        className='search-input'
        placeholder='포켓몬을 검색해보세요!'
      ></input>
    </header>
  );
}
