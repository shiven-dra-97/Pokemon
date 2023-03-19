import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./Components/Home";
import PokemonDetails from "./Components/PokemonDetails"
import './App.css';

const App=()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokemon/:name" element={<PokemonDetails/>}/>
    </Routes>
    </BrowserRouter>
        
  );
}

export default App;
