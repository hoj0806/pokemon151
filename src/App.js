import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PokemonBox from "./components/PokemonBox/PokemonBox";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <PokemonBox />
      <PokemonBox />
    </div>
  );
}

export default App;
